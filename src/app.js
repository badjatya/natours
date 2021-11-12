const express = require("express");
const fs = require("fs");
const morgan = require("morgan");
const app = express();

// express middlewares
app.use(morgan("dev"));
app.use(express.json());

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/users.json`)
);

// Routes
app.use("/api/v1/tours", require("./routes/tourRoutes"));
app.route("/api/v1/users").get(getUsers);

app.listen(5000, () => {
  console.log(`Listening at http://localhost:${5000}`);
});

// Controllers

// ** Users
function getUsers(req, res) {
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
}
