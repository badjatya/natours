// Models
const Tour = require("../models/tour");

function getTours(req, res) {
  res.status(200).json({
    status: "success",
    // results: tours.length,
    // data: {
    //   tours,
    // },
  });
}

function createTour(req, res) {
  res.status(201).json({
    status: "success",
    // data: {
    //   tour: newTour,
    // },
  });
}

function getTour(req, res) {
  res.status(200).json({
    status: "success",
    // data: {
    //   tour,
    // },
  });
}

function updateTour(req, res) {
  res.status(200).json({
    status: "success",
    data: {
      tour: "<Updated tour here...>",
    },
  });
}

function deleteTour(req, res) {
  res.status(204).json({
    status: "success",
    data: null,
  });
}

module.exports = {
  getTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
};
