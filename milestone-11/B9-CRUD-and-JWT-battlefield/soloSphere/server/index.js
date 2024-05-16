const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
  optionSuccessStatus: 200,
};

//middleware setup
app.use(express.json());
app.use(cors(corsOptions));

app.use(cookieParser());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jimwvxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri);

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production" ? true : false,
  sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
};

const verifyToken = async (req, res, next) => {
  const token = req?.cookies?.token;
  if (!token) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "unauthorized access" });
    }
    req.user = decoded;
    next();
  });
};

async function run() {
  try {
    const jobCollection = client.db("soloSphere").collection("jobs");
    const bidCollection = client.db("soloSphere").collection("bids");

    //auth related token
    app.post("/jwt", async (req, res) => {
      const token = jwt.sign(req.body, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "7d",
      });
      res.cookie("token", token, cookieOptions).send({ success: true });
    });

    app.post("/logout", async (req, res) => {
      res
        .clearCookie("token", { ...cookieOptions, maxAge: 0 })
        .send({ success: true });
    });

    app.get("/jobs", async (req, res) => {
      const result = await jobCollection.find().toArray();
      res.send(result);
    });
    app.get("/jobs/:id", async (req, res) => {
      const result = await jobCollection.findOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });

    app.get("/myJobs/:email", verifyToken, async (req, res) => {
      // let query = {};
      // if (req.query?.email) {
      //   query = { "buyer.email": req.params.email };
      // }

      if (req.user?.email !== req.params?.email) {
        return res.status(403).send({ message: "forbidden access" });
      }

      const result = await jobCollection
        .find({ "buyer.email": req.params.email })
        .toArray();
      res.send(result);
    });

    app.delete("/jobs/:id", async (req, res) => {
      // const id = req.params.id;
      // const query = { _id: new ObjectId(id) };
      const result = await jobCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });

    app.post("/jobs", async (req, res) => {
      const result = await jobCollection.insertOne(req.body);
      res.send(result);
    });

    app.put("/jobs/:id", async (req, res) => {
      const filter = {
        _id: new ObjectId(req.params.id),
      };

      const updateDoc = {
        $set: { ...req.body },
      };

      const options = { upsert: true };

      const result = await jobCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    app.post("/bids", async (req, res) => {
      const bidData = req.body;
      //check if its a duplicate request
      const alreadyApplied = await bidCollection.findOne({
        email: bidData.email,
        jobId: bidData.jobId,
      });

      if (alreadyApplied) {
        return res
          .status(400)
          .send("You have already placed a bid on this job");
      }

      const result = await bidCollection.insertOne(bidData);

      //update bid count in jobs collection
      // update bid count in jobs collection
      const updateDoc = {
        $inc: { bid_count: 1 },
      };
      const jobQuery = { _id: new ObjectId(bidData.jobId) };
      const updateBidCount = await jobCollection.updateOne(
        jobQuery,
        updateDoc
      );
      console.log(updateBidCount);
      // const updateDoc = {
      //   $inc: { bidCount:1 } ,
      // };
      // const jobQuery = {_id: new ObjectId(bidData.jobId)}
      // console.log(jobQuery);
      // const updateBidCount = await jobCollection.updateOne(jobQuery,updateDoc)
      // console.log(updateBidCount);
      res.send(result);
    });

    //get all bids for a user by email

    app.get("/my-bids/:email", verifyToken, async (req, res) => {
      if (req.user?.email !== req.params?.email) {
        return res.status(403).send({ message: "forbidden access" });
      }
      const result = await bidCollection
        .find({ email: req.params.email })
        .toArray();
      res.send(result);
    });

    //get all bids request for a user by email
    app.get("/bids-request/:email", verifyToken, async (req, res) => {
      if (req.user?.email !== req.params?.email) {
        return res.status(403).send({ message: "forbidden access" });
      }
      const result = await bidCollection
        .find({ "buyer.email": req.params.email })
        .toArray();
      res.send(result);
    });

    // update status
    app.patch("/bid/:id", async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) };
      const status = req.body;
      const updateDoc = {
        $set: status,
      };
      const result = await bidCollection.updateOne(query, updateDoc);
      res.send(result);
    });

    //all jobs
    app.get("/all-jobs", async (req, res) => {
      const page = parseInt(req.query.page) - 1;
      const size = parseInt(req.query.size);
      const filter = req.query.filter;
      const sort = req.query.sort;
      const search = req.query.search;
      let options = {};
      let query = {
        jobTitle: { $regex: search, $options: "i" },
      };
      if (filter) query.category = filter;
      if (sort) options = { sort: { deadline: sort === "asc" ? 1 : -1 } };

      const result = await jobCollection
        .find(query, options)
        .skip(page * size)
        .limit(size)
        .toArray();

      res.send(result);
    });

    //count
    app.get("/jobs-count", async (req, res) => {
      const filter = req.query.filter;
      const search = req.query.search;
      let query = {
        jobTitle: { $regex: search, $options: "i" },
      };
      if (filter) query.category = filter;
      const count = await jobCollection.countDocuments(query);
      res.send({ count });
    });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("I am from Home route");
});

app.listen(port, () => {
  console.log(`Server is running at : http://localhost:${port}`);
});
