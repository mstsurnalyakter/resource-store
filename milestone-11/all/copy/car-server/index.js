require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser")
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

//middleware
//Must remove "/" from your production URL
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://car-client-bd641.web.app",
      "https://car-client-bd641.firebaseapp.com",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jimwvxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


//middleware

const logger =  async (req,res,next)=>{
  console.log("log info",req.method,req.url);
  next();
}

const verifyToken = async (req,res,next) =>{
  const token = req?.cookies?.token;
  if (!token) {
    return res.status(401).send({message:"unauthorized access"})
  }
  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
    if (err) {
      return res.status(401).send({ message: "unauthorized access" });
    }
    req.user = decoded;
    next();
  })

}


const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production" ? true : false,
  sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
};



async function run() {
  try {
    const serviceCollection = client.db("car").collection("services");
    const bookingCollection = client.db("car").collection("bookings");

    //auth related token
    app.post("/jwt", async (req,res)=>{

      const token = jwt.sign(req.body, process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1h'});

      res
      .cookie("token",token,cookieOptions)
      .send({success:true})

    })

    //remove cookies from browser when user logOut
    app.post("/logout", async(req,res)=>{
      const user = req.body;
      res
        .clearCookie("token", { ...cookieOptions, maxAge: 0 })
        .send({ success: true });
    })


    //services
    app.get("/services", async (req, res) => {
      const filter = req.query;
      console.log(filter);
      let query = {};

      // let query = {
      //   price:{$lt:150 ,$gt:10}
      // };


      const options = {
        sort:{
          price:filter.sort === 'asc' ? 1 : -1
        }
      }
      const result = await serviceCollection.find(query,options).collation({locale:"en_US",numericOrdering:true}).toArray();
      res.send(result);
    });

    app.get("/services/:id", async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) };
      const options = {
        projection: { title: 1, price: 1, service_id: 1, img: 1 },
      };
      const result = await serviceCollection.findOne(query, options);
      res.send(result);
    });

    // bookings

    app.get("/bookings",logger,verifyToken, async(req,res)=>{
      if (req.user?.email !== req.query?.email) {
        return res.status(403).send({message:"forbidden access"})
      }


      let query = {};

      if (req.query?.email) {
        query={email: req.query.email}

      }

      const result = await bookingCollection.find(query).toArray();
      res.send(result)
    });

    app.post("/bookings",async(req,res)=>{
      const result = await bookingCollection.insertOne(req.body);
      res.send(result)
    });

    app.delete("/bookings/:id", async(req,res)=>{
      const result = await bookingCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result)
    });

    app.patch("/bookings/:id", async(req,res)=>{
      const filter = {_id: new ObjectId(req.params.id)};
      const updateDoc = {
        $set:{
          status:req.body.status
        }
      }
      const result = await bookingCollection.updateOne(filter,updateDoc);
      res.send(result)
    });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("I am from Home Route");
});

app.listen(port, () => {
  console.log(`Server is running at : http://localhost:${port}`);
});
