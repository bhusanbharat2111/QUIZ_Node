const mongoose = require("mongoose");

const answersSchema = new mongoose.Schema({
  questionID: {
    type: String,
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  questionType: {
    type: String,
    required: false,
    default: 0,
  },
});

module.exports = mongoose.model("Answers", answersSchema);
