const express = require("express");
const cors = require("cors");

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// config
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

// const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.50udlth.mongodb.net/?retryWrites=true&w=majority`;

const uri = "mongodb://localhost:27017";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const productCollection = client.db("brandStore").collection("products");



    app.post("/addProduct", async(req,res)=>{
      const result = await productCollection.insertOne(req.body);
      res.send(result);
    });

     app.get("/myProduct/:email", async (req, res) => {
       const result = await productCollection
         .find({ email: req.params.email })
         .toArray();
       res.send(result);
     });

     app.get("/singleProduct/:id", async (req, res) => {
       const result = await productCollection.findOne({
         _id: new ObjectId(req.params.id)
       });
       res.send(result);
       console.log(result);
     });

     app.put("/updateProduct/:id", async (req, res) => {
       const filter = { _id: new ObjectId(req.params.id) };
        const updatedProduct = req.body;
       const options = { upsert: true };

       const updateDoc = {
         $set: {
          name:updatedProduct.name,
          price:updatedProduct.price,
          image:updatedProduct.image,
          type:updatedProduct.type,
          rating:updatedProduct.rating,
          brand:updatedProduct.brand
         },
       };

       const result = await productCollection.updateOne(filter, updateDoc, options);
       res.send(result);
     });

     app.delete("/deleteProduct/:id", async(req,res)=>{

      const result = await productCollection.deleteOne({
        _id: new ObjectId(req.params.id)
      });

      res.send(result)



     })


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
  res.send("gigaGadgets Confirmed!");
});

app.listen(port, () => {
  console.log(`Brandshop listening at http://localhost:${port}`);
});
