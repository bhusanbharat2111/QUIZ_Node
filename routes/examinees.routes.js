const express = require("express");
const examineeRouter = express.Router();

const { attemptQuiz, getExaminees } = require("../service/examinees.service");
const { getQuestions } = require("../service/question.service");

examineeRouter.get("/get-questions", getQuestions);
examineeRouter.post("/attempt-quiz", attemptQuiz);
examineeRouter.get("/get-details", getExaminees);

module.exports = examineeRouter;
