const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT ||5001

const app = express();


//middleware
app.use(cors());
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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const commentCollection = client.db("commentDB").collection("comment");


    app.get("/comments", async(req,res)=>{
         const cursor = await commentCollection.find();
         const result = await cursor.toArray();
         res.send(result)
    });


    app.post("/comments", async(req,res)=>{
        const comment = req.body;
          const result = await commentCollection.insertOne(comment);
          res.send(result);
    })

    app.delete("/comments/:id", async (req,res)=>{
        const id = req.params.id;
         const query = { _id: new ObjectId(id) };
         const result = await commentCollection.deleteOne(query);
         res.send(result);
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/",(req,res)=>{
    res.send("I am from Home Route!")
})

app.listen(port ,()=>{
    console.log(`Server is running at : http://localhost:${port}`);
})
