import React, { useState } from "react";
import { IQuiz } from "../../shared/interfaces/quiz";
import moment from "moment";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import "./QuizQuestion.css";
export interface IQuizQuestion {
  quizeData: IQuiz;
}
const QuizQuestion: React.FC<IQuizQuestion> = ({ quizeData }) => {
  const [open, setOpen] = useState<string>("0");
  const toggle = (index: string) => {
    if (open === index) {
      setOpen(String(questions_answers.length - 1));
    } else {
      setOpen(index);
    }
  };
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

  return (
    <div className="quize-Data-wrapper main-card px-4 py-4">
      <p className="main-header text-capitalize py-0">title: {title}</p>
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
          <a className=" text-decoration-none px-1" href={url} target="blank">
            {url}
          </a>
        </p>
        <p className="text-capitalize data-label custom-w">
          final score:
          <span className="data"> {score ? score : "-"}</span>
        </p>
      </div>
      <p className="text-capitalize data">{description}</p>
      <p className="main-header text-capitalize ">questions</p>
      <Accordion open={open} toggle={toggle}>
        {questions_answers &&
          questions_answers.map((item, index) => {
            return (
              <AccordionItem key={index}>
                <AccordionHeader targetId={String(index)}>
                  {item.text}
                </AccordionHeader>

                <AccordionBody className="py-0" accordionId={String(index)}>
                 <div className="d-flex justify-content-between">
                 <p className="text-capitalize data-label mb-1 ">
                    true feedback:
                    <span className="data text-success"> {item.feedback_true} </span>
                  </p>
                  <p className="text-capitalize data-label  mb-1">
                    false feedback:
                    <span className="data text-danger"> {item.feedback_false} </span>
                  </p>
                 </div>
                  {item.answers &&
                    item.answers.map((answer, answerIndex) => {
                      return (
                        <p
                        key={answer.id}
                          className={
                            answer.is_true
                              ? "text-success mb-1"
                              : "text-danger mb-1"
                          }
                        >
                          <span className="data-label text-capitalize pe-1">
                            answer {answerIndex + 1}:
                          </span>
                          {answer.text}
                          {answer.is_true && ' "the only one correct answer" '}
                        </p>
                      );
                    })}
                </AccordionBody>
              </AccordionItem>
            );
          })}
      </Accordion>
    </div>
  );
};

export default QuizQuestion;
