require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://job-portal-f2a64.web.app",
    "https://job-portal-f2a64.firebaseapp.com",
  ],
  credentials: true,
};
// const corsConfig = {
//   origin: "*",
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
// };
// app.use(cors(corsConfig));

//middleware setup
app.use(cors(corsOptions));
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

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production" ? true : false,
  sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
};


async function run() {
  try {
    const jobCollection = client.db("jobPortal").collection("jobs");
    const applyJobCollection = client.db("jobPortal").collection("applyJobs");

    //auth related token
    app.post("/jwt", async (req, res) => {
      const token = jwt.sign(req.body, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "12h",
      });

      res.cookie("token", token, cookieOptions).send({ success: true });
    });

    //remove cookies from browser when user logOut
    app.post("/logout", async (req, res) => {
      const user = req.body;
      console.log(user);
      res
        .clearCookie("token", {...cookieOptions, maxAge: 0 })
        .send({ success: true });
    });


    //job related api
    app.get("/jobs", async (req, res) => {
      const result = await jobCollection.find().toArray();
      res.send(result);
    });

    app.get("/all-jobs", async (req, res) => {
      const page = parseInt(req.query.page) - 1;
      const size = parseInt(req.query.size);
      const search = req.query.search;

      const query = {
        jobTitle: { $regex: search, $options: "i" },
      };
      const result = await jobCollection
        .find(query)
        .skip(page * size)
        .limit(size)
        .toArray();
      res.send(result);
    });

    app.get("/jobs-count", async (req, res) => {
      const search = req.query.search;
      let query = {
        jobTitle: { $regex: search, $options: "i" },
      };
      const count = await jobCollection.countDocuments(query);
      res.send({ count });
    });

    app.post("/add-jobs", async (req, res) => {
      const result = await jobCollection.insertOne(req.body);
      res.send(result);
    });

    app.get("/my-jobs/:email", async (req, res) => {

      console.log(req.user);



      const result = await jobCollection
        .find({ "user.email": req.params.email })
        .toArray();
      res.send(result);
    });

    app.get("/update-job/:id", verifyToken, async (req, res) => {
      const result = await jobCollection.findOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });

    app.put("/update-job/:id", async (req, res) => {
      console.log(req.body);
      const filter = {
        _id: new ObjectId(req.params.id),
      };

      const updateDoc = {
        $set: { ...req.body },
      };
      const result = await jobCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    app.delete("/my-job/:id", async (req, res) => {
      const result = await jobCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });

    app.get("/job/:id", async (req, res) => {
      const result = await jobCollection.findOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });

    app.post("/apply-job", async (req, res) => {
      const applyData = req.body;

      const alreadyApplied = await applyJobCollection.findOne({
        userEmail: applyData.userEmail,
        jobId: applyData.jobId,
      });

      if (alreadyApplied) {
        return res.status(400).send("You have already applied for this job.");
      }

      const result = await applyJobCollection.insertOne(applyData);

      const updateDoc = {
        $inc: { jobApplicantsNumber: 1 },
      };
      const query = { _id: new ObjectId(applyData.jobId) };

      await jobCollection.updateOne(query, updateDoc);

      res.send(result);
    });

    app.get("/applied-job",verifyToken, async (req, res) => {
         if (req.user?.email !== req.query?.email) {
           return res.status(403).send({ message: "forbidden access" });
         }
      const filter = req.query?.filter;

      const query = {
        userEmail: req.query?.email,
      };

      if (filter) query.jobCategory = filter;

      const result = await applyJobCollection.find(query).toArray();
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
  res.send("I am from Home route");
});

app.listen(port, () => {
  console.log(`Server is running at : http://localhost:${port}`);
});
