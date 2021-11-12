const fs = require("fs");
const path = require("path");

// Tours
const users = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../dev-data/data/users.json"))
);

// Middlewares
const checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: "fail",
      message: "missing name or price",
    });
  }

  next();
};

function getUsers(req, res) {
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
}

function createUser(req, res) {
  try {
    const newUser = {
      id: users.length + 1,
      ...req.body,
    };

    users.push(newUser);
    fs.writeFileSync(
      path.join(__dirname, "../dev-data/data/users.json"),
      JSON.stringify(users)
    );

    res.status(201).json({
      status: "success",
      data: {
        users: newUser,
      },
    });
  } catch (error) {
    res.send(error);
  }
}

function getUser(req, res) {
  const user = users.find((user) => user.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid id",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
}

function updateUser(req, res) {
  const user = users.find((user) => user.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid id",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      tour: "<Updated user here...>",
    },
  });
}

function deleteUser(req, res) {
  const user = users.find((user) => user.id === parseInt(req.params.id));

  if (!user) {
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
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  checkBody,
};
