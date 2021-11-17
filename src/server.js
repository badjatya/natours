const express = require("express");
const morgan = require("morgan");

// db
require("./db/mongoose");

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

app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `The page ${req.originalUrl} is not found in the server`,
  });
});

module.exports = app;
