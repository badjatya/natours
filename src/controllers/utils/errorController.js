// Utils
const AppError = require("../../utils/appError");

const sendDevelopmentErrorResponse = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

const sendProductionErrorResponse = (err, res) => {
  // Trusted errors
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
  // Programming errors
  else {
    console.error("ERROR ", err);
    res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendDevelopmentErrorResponse(err, res);
  } else if (process.env.NODE_ENV === "production") {
    const error = { ...err };

    if (error.name === "CastError") {
      error = handleCastErrorDB(error, next);
    }
    sendProductionErrorResponse(error, res);
  }
};
