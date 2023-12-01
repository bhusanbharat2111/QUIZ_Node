const mongoose = require("mongoose");

const examineesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  attempts: [
    {
      questionID: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
    },
  ],
  questionType: {
    type: String,
    required: true,
  },
  securedMark: {
    type: String,
    required : false
  }
});

module.exports = mongoose.model("Examinees", examineesSchema);
