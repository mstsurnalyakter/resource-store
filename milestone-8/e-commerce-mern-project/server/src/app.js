const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
const xssClean = require("xss-clean");
const rateLimit = require("express-rate-limit");
const { errorResponse } = require("./controllers/response.controller");
const userRouter = require("./routes/users.route");
const seedRouter = require("./routes/seed.route");

const app = express();

/** api secure */
const rateLimiter = rateLimit({
  max: 5,
  message: "Too many require from this IP. Please try again later.",
});

/** application level middleware */
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(xssClean());
app.use(rateLimiter);

/** API */
app.use("/api/users", userRouter);
app.use("/api/seed", seedRouter);

/** Home route */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is working successfully.",
  });
});

/** error handler */

app.use((req, res, next) => {
  next(createError(404, "Not found route."));
});

app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.message,
    message: err.message,
  });
});

module.exports = app;
