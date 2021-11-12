const fs = require("fs");
const path = require("path");

// Tours
const tours = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../dev-data/data/tours-simple.json"))
);

function getTours(req, res) {
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
}

function createTour(req, res) {
  try {
    const newTour = {
      id: tours.length + 1,
      ...req.body,
    };

    tours.push(newTour);
    fs.writeFileSync(
      `${__dirname}/dev-data/data/tours-simple.json`,
      JSON.stringify(tours)
    );

    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.send(error);
  }
}

function getTour(req, res) {
  const tour = tours.find((tour) => tour.id === parseInt(req.params.id));

  if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid id",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
}

function updateTour(req, res) {
  const tour = tours.find((tour) => tour.id === parseInt(req.params.id));

  if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid id",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      tour: "<Updated tour here...>",
    },
  });
}

function deleteTour(req, res) {
  const tour = tours.find((tour) => tour.id === parseInt(req.params.id));

  if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid id",
    });
  }

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
