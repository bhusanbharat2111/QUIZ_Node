const Question = require("../models/question");
const Answer = require("../models/answer");
const Examinee = require("../models/examinees");

exports.attemptQuiz = async (req, res) => {
  let length;
  try {
    const { name, contactNumber, attempts, questionType } = req.body;
    const newExaminee = await Examinee({
      name,
      contactNumber,
      attempts,
      questionType,
    });
    var allAnswers = await Answer.find({ questionType }); // answers model
    length = allAnswers.length;
    if (length === 0) {
      return res
        .status(404)
        .json({ Message: "your prefered subject is not found" });
    }
    let count = 0;
    for (let index = 0; index < length; index++) {
      const element = allAnswers[index];
      for (let index1 = 0; index1 < newExaminee.attempts.length; index1++) {
        const element1 = newExaminee.attempts[index1];
        if (
          element.questionID === element1.questionID &&
          element.correctAnswer === element1.answer
        ) {
          count++;
          break;
        }
      }
    }
    newExaminee.securedMark = `${count} out of ${length}`;
    newExaminee.save();
    return res
      .status(200)
      .json({ messsage: `You got ${newExaminee.securedMark}` });
  } catch (error) {
    res.status(400).json({ messsage: "Server error" });
  }
};

exports.getExaminees = async (req, res) => {
  const { name } = req.body;
  try {
    var examinees = await Examinee.find({ name });
    res.status(200).json({ messsage: examinees });
  } catch (error) {
    res.status(400).json({ messsage: "Server error" });
  }
};
