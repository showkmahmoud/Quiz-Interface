import React from "react";
import { IQuiz } from "../../shared/interfaces/quiz";
import './QuizQuestion.css'
export interface IQuizQuestion {
  quizeData: IQuiz;
}
const QuizQuestion: React.FC<IQuizQuestion> = ({ quizeData }) => {
  const {
    created,
    description,
    modified,
    questions_answers,
    score,
    title,
    url,
  } = quizeData;
  return (
    <div className="quize-Data-wrapper main-card px-2 py-4">
      <div className="d-flex justify-content-between align-content-center">
        <p>{title}</p>
        <p>{created}</p>

      </div>
    </div>
  );
};

export default QuizQuestion;
