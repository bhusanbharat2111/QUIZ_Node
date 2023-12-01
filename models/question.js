const mongoose = require("mongoose");

const questionsSchema = new mongoose.Schema({
  question: {
    type: String,
    required: false,
  },
  questionID: {
    type: String,
    required: false,
  },
  options: {
    type: String,
    required: false,
  },
  questionType: {
    type: String,
    required: false,
    default: 0,
  },
});

module.exports = mongoose.model("Questions", questionsSchema);
