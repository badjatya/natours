// Models
const Tour = require("../models/tour");

const getTours = async (req, res) => {
  try {
    const tours = await Tour.find({});

    res.status(200).json({
      status: "success",
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

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
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data",
      error: error,
    });
  }
};

const getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

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
