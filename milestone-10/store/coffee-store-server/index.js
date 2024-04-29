const express = require('express');
const cors = require('cors');
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;


//middleware
app.use(cors());
app.use(express.json());





const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jimwvxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

console.log(uri);

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
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const coffeeCollection =  client.db("coffeeDB").collection("coffee");
    const usersCollection = client.db("coffeeDB").collection("users");

    app.get("/coffee", async (req,res)=>{
         const cursor = await coffeeCollection.find();
         const result = await cursor.toArray()
         res.send(result)
    })

    app.get("/coffee/:id", async (req,res)=>{
      const id = req.params.id;
       const query = { _id: new ObjectId(id) };
         const result = await coffeeCollection.findOne(query);
         res.send(result);
    })

    app.post("/coffee", async (req,res)=>{
        const newCoffee = req.body;
        const result = await coffeeCollection.insertOne(newCoffee);
        console.log(newCoffee);
        res.send(result)
    })

    app.put("/coffee/:id", async (req,res)=>{
      const id = req.params.id;
      const updateCoffee = req.body;
      const filter = { _id: new ObjectId(id) };

      const options = { upsert: true };

      const updateCoffeeInto = {
        $set: {
          name: updateCoffee?.name,
          quantity: updateCoffee?.quantity,
          supplier: updateCoffee?.supplier,
          taste: updateCoffee?.taste,
          category: updateCoffee?.category,
          details: updateCoffee?.details,
          photoURL: updateCoffee?.photoURL,
        },
      };
      const result = await coffeeCollection.updateOne(filter, updateCoffeeInto, options);
      res.send(result)
    })


    app.delete("/coffee/:id", async (req,res)=>{
      const id = req.params.id;
       const query = { _id: new ObjectId(id)};
       const result = await coffeeCollection.deleteOne(query);
       res.send(result);
    })


    // users related apis

    app.get("/users", async (req,res)=>{
      const cursor = await usersCollection.find();
      const result = await cursor.toArray();
      res.send(result)
    })

    app.post(`/users`, async (req,res)=>{
      const newUser = req.body;
      console.log(newUser);
      const result = await usersCollection.insertOne(newUser);
      res.send(result);
    })

       app.patch(`/users`, async (req, res) => {
         const user = req.body;
         const filter = { email: user?.email };
         const updatedUser = {
          $set:{
             lastLoggedAt:user?.lastLoggedAt
          }
         }
         const result = await usersCollection.updateOne(filter,updatedUser)
         console.log(user);
         res.send(result)
       });

    app.delete("/users/:id", async (req,res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await usersCollection.deleteOne(query);
      res.send(result)
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





app.get("/",(req, res)=>{
    res.send("I am home route.")
})

app.listen(port,()=>{
    console.log(`Server is running at: http://localhost:${port}`);
})