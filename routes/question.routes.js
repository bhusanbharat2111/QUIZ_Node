const express = require("express");
const questionRouter = express.Router();

const {
  insertQuestion,
  getQuestions,
  getAnswers,
  deleteQuestion,
} = require("../service/question.service");

questionRouter.post("/insert-question", insertQuestion);
questionRouter.get("/get-questions", getQuestions);
questionRouter.get("/get-answers", getAnswers);
questionRouter.delete("/delete-question", deleteQuestion);

module.exports = questionRouter;
