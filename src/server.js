const express = require("express");
const morgan = require("morgan");

// Modules
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/utils/errorController");

const app = express();
require("./db/mongoose");

// express middlewares
app.use(express.static(`${__dirname}/public`));
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes
app.use("/api/v1/tours", require("./routes/tourRoutes"));
app.use("/api/v1/users", require("./routes/userRoutes"));

// Handling all unhandled routes
app.all("*", (req, res, next) => {
  next(
    new AppError(`The page ${req.originalUrl} is not found in the server`, 404)
  );
});
// Global error middleware
app.use(globalErrorHandler);

module.exports = app;
