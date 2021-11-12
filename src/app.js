const express = require("express");
const fs = require("fs");
const morgan = require("morgan");
const app = express();

// express middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/v1/tours", require("./routes/tourRoutes"));
app.use("/api/v1/users", require("./routes/userRoutes"));

app.listen(5000, () => {
  console.log(`Listening at http://localhost:${5000}`);
});
