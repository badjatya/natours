const express = require("express");
const morgan = require("morgan");
const app = express();

// express middlewares
app.use(express.static(`${__dirname}/public`));
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes
app.use("/api/v1/tours", require("./routes/tourRoutes"));
app.use("/api/v1/users", require("./routes/userRoutes"));

module.exports = app;
