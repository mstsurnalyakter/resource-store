const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5001;

// middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://paper-glass-artistry-client.web.app",
    ],
  })
);
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jimwvxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

console.log(uri);

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const paperGlassCollection = client.db("paperGlassArtistryDB").collection("paperGlass");

    const bannerCollection = client.db("paperGlassArtistryDB").collection("banner");

    const subcategoryCollection = client.db("paperGlassArtistryDB").collection("subcategory");
    const testimonialCollection = client.db("paperGlassArtistryDB").collection("testimonial");

    app.get("/paperGlasses", async (req, res) => {
      const result = await paperGlassCollection.find().toArray();
      res.send(result);
    });

    app.get("/paperGlasses/:email", async (req, res) => {
      const result = await paperGlassCollection
        .find({ user_email: req.params.email })
        .toArray();
      res.send(result);
    });

    app.get("/paperGlasses/singleItem/:id", async (req, res) => {
      const result = await paperGlassCollection.findOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });


    app.post("/paperGlasses", async (req, res) => {
      const result = await paperGlassCollection.insertOne(req.body);
      res.send(result);
    });

     app.put("/paperGlasses/:id", async (req, res) => {
       const updatedItem = req.body;

       const item = {
         $set: {
           image:updatedItem.image,
           item_name:updatedItem.item_name,
           subcategory_Name:updatedItem.subcategory_Name,
           price:updatedItem.price,
           rating:updatedItem.rating,
           processing_time:updatedItem.processing_time,
           customization:updatedItem.customization,
           stockStatus:updatedItem.stockStatus,
           short_description:updatedItem.short_description,
           user_name:updatedItem.user_name,
           user_email:updatedItem.user_email,
         },
       };

       const result = await paperGlassCollection.updateOne(
         { _id: new ObjectId(req.params.id) },
         item,
         { upsert: true }
       );
       res.send(result);
     });

     app.delete("/paperGlasses/:id", async (req, res) => {
       const result = await paperGlassCollection.deleteOne({
         _id: new ObjectId(req.params.id)
       });
       res.send(result);
     });


      app.get("/banners", async (req, res) => {
        const result = await bannerCollection.find().toArray();
        res.send(result);
      });


      app.get("/subcategories", async (req, res) => {
        const result = await subcategoryCollection.find().toArray();
        res.send(result);
      });

      app.get("/testimonials", async (req, res) => {
        const result = await testimonialCollection.find().toArray();
        res.send(result);
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
  res.send("Welcome to Home Route!");
});

app.listen(port, () => {
  console.log(`Server is running at: http://localhost:${port}`);
});
