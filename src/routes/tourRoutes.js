const router = require("express").Router();

// Importing Controllers
const {
  getTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourController");

router.route("/").get(getTours).post(createTour);
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
