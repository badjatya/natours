const router = require("express").Router();

// Importing Controllers
const {
  getTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  aliasTopTours,
} = require("../controllers/tourController");

// Top 5 cheap aliasing to getRoutes
router.route("/top-5-cheap").get(aliasTopTours, getTours);

router.route("/").get(getTours).post(createTour);
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
