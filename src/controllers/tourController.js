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

const createTour = async (req, res) => {
  try {
    const newTour = new Tour(req.body);
    await newTour.save();

    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });

    console.log(newTour);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data",
      error: error,
    });
  }
};

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
