require("dotenv").config();
const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jimwvxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//middleware
const logger = async (req,res,next)=>{
  console.log("call",req.host,req.originalURL);
  next()
}

const verifyToken = async (req,res,next) =>{
  const token = req.cookies?.token;
  console.log("ttttttttttt",token);
  if (!token) {
    return res.status(401).send({message:"not authorized"})
  }
  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
    //error
    if (err) {
      return res.status(401).send({message:"unauthorized"})
    }

    // if token is valid then it would be decoded
    console.log("decoded",decoded);
    req.user = decoded
    next()
  })
}



async function run() {
  try {
    const serviceCollection = client.db("car").collection("services");
    const bookingCollection = client.db("car").collection("bookings");

    //auth related api
    app.post("/jwt",logger, async(req,res)=>{
      const user = req.body;
      console.log("token",req.cookies.token);
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",
      });

      // res
      // .cookie('token',token,{
      //   httpOnly:true,
      //   secure:true,
      //   sameSite:"none"
      // })
      // .send({success:true});

      res
      .cookie("token",token,{
        httpOnly:true,
        secure:true,
        sameSite:'none'
      })
      .send({success:true})

    })

    //services related api
    app.get("/services",logger, async (req, res) => {
      const result = await serviceCollection.find().toArray();
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


    // bookings related api
    app.get("/bookings",logger,verifyToken, async(req,res)=>{
      console.log("user",req.user);
      if (req.query?.email !== req.user?.email) {
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
