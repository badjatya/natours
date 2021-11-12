const router = require("express").Router();

// Importing Controllers
const {
  getTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  checkId,
} = require("../controllers/tourController");

router.param("id", checkId);

router.route("/").get(getTours).post(createTour);
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
