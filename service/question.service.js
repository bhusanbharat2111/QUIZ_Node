const Question = require("../models/question");
const Answer = require("../models/answer");

exports.insertQuestion = async (req, res) => {
  try {
    let { correctAnswer, options, questionID, question, questionType } =
      req.body;
    if ((await Question.find({ questionID })).length !== 0) {
      return res
        .status(409)
        .json({ messsage: "Duplicate Question ID is not allowed" });
    }
    const newQuestion = await Question({
      options,
      questionID,
      question,
      questionType,
    });
    newQuestion.save();
    const newAnswer = await Answer({
      questionID,
      correctAnswer,
      questionType,
    });
    newAnswer.save();
    return res.status(200).json({ messsage: "inserted successfully" });
  } catch (error) {
    return res.status(400).json({ messsage: "Server error" });
  }
};

exports.getQuestions = async (req, res) => {
  try {
    let { questionType } = req.body;
    const question = await Question.find({ questionType });
    res.status(200).json({ question });
  } catch (error) {
    res.status(400).json({ messsage: "Server error" });
  }
};

exports.getAnswers = async (req, res) => {
  try {
    let { questionType } = req.body;
    const answers = await Answer.find({ questionType });
    res.status(200).json({ answers });
  } catch (error) {
    res.status(400).json({ messsage: "Server error" });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    let { questionID } = req.body;
    await Question.deleteMany({ questionID });
    await Answer.deleteMany({ questionID });
    return res.status(200).json({ messsage: "Deletion successful" });
  } catch (error) {
    res.status(400).json({ error });
  }
};