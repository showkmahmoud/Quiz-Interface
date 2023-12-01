import React, { useEffect } from "react";
import { IQuiz } from "../../shared/interfaces/quiz";
import moment from "moment";
import "./QuizQuestion.css";
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
  const createdDate = moment(String(created), "YYYY-MM-DD HH:mm:ss");
  const createdFormattedDate = createdDate.format("YYYY-MM-DD HH:mm");
  const modifiedDate = moment(String(modified), "YYYY-MM-DD HH:mm:ss");
  const modifiedFormattedDate = modifiedDate.format("YYYY-MM-DD HH:mm");

  useEffect(() => {}, []);

  return (
    <div className="quize-Data-wrapper main-card px-4 py-4">
      <p className="main-header text-capitalize py-0">{title}</p>
      <div className="d-flex justify-content-between align-content-start">
        <p className="text-capitalize data-label">
          Created date:
          <span className="data"> {createdFormattedDate}</span>
        </p>
        <p className="text-capitalize data-label custom-w">
          modified date:
          <span className="data">
            {" "}
            {modifiedFormattedDate ? modifiedFormattedDate : "Not yet"}
          </span>
        </p>
      </div>
      <div className="d-flex justify-content-between align-content-start">
        <p className="text-capitalize data-label">
          Url:
          <a
            className="data text-decoration-none px-1"
            href={url}
            target="_blank"
          >
            {url}
          </a>
        </p>
        <p className="text-capitalize data-label custom-w">
          final score:
          <span className="data"> {score ? score : '-'}</span>
        </p>
      </div>

      <p className="text-capitalize data">
        {description}
      </p>
    
    </div>
  );
};

export default QuizQuestion;
