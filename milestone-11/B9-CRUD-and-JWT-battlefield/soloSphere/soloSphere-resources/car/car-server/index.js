require("dotenv").config();
const express = require("express");
const cors = require("cors");
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


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jimwvxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});




async function run() {
  try {
    const serviceCollection = client.db("car").collection("services");
    const bookingCollection = client.db("car").collection("bookings");

    //services
    app.get("/services", async (req, res) => {
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

    // bookings

    app.get("/bookings", async(req,res)=>{
      console.log(req.query.email);
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
