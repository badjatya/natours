const router = require("express").Router();

// Importing Controllers
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  checkBody,
} = require("../controllers/userControllers");

router.route("/").get(getUsers).post(checkBody, createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
