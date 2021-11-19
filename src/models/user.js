const mongoose = require("mongoose");

// Lib
const validator = require("validator");

// Schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: validator.isEmail,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  confirmPassword: {
    type: String,
    required: true,
    minlength: 8,
  },
  image: {
    type: String,
  },
});
