import React, { useState, ChangeEvent, useEffect } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import "./AddEditQuiz.css";
import { useLocation } from "react-router-dom";
import { AddEditMode } from "../../shared/enums/addEditMode";
import { IAnswer, IQuestion } from "../../shared/interfaces/questuinsAnswers";
export interface IAddEditQuiz {
  onSubmitForm: any;
  selectedQuiz: any;
  children: any;
}
const AddEditQuiz: React.FC<IAddEditQuiz> = ({
  onSubmitForm,
  selectedQuiz,
  children,
}) => {
  const getInitialValue = () => {
    return {
      title: "",
      url: "",
      description: "",
      score: 0,
      questionsAnswers: [],
    };
  };
  const [mode, setMode] = useState(AddEditMode.ADD);
  const [formData, setFormData] = useState(getInitialValue());
  const [state, setState] = useState(true);
  const { title, description, score, url, questionsAnswers = [] } = formData;
  const location = useLocation();

  const handleAnswerChange = (
    questionIndex: number,
    answerIndex: number,
    value: string | boolean,
    field:string
  ) => {
    console.log(value)
    setFormData((prevFormData: any) => {
      const updatedQuestionsAnswers = [...prevFormData.questionsAnswers];
      updatedQuestionsAnswers[questionIndex].answers[answerIndex][field] = value;
      console.log(updatedQuestionsAnswers);
      return { ...prevFormData, questionsAnswers: updatedQuestionsAnswers };
    });
  };

  const handleQuestionChange = (
    index: number,
    field: string,
    value: string
  ) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      questionsAnswers: prevFormData.questionsAnswers.map(
        (item: any, itemIndex: number) =>
          itemIndex === index ? { ...item, [field]: value } : item
      ),
    }));
  };
  const addAnswer = (questionIndex: number) => {
    setFormData((prevFormData: any) => {
      const updatedQuestionsAnswers = [...prevFormData.questionsAnswers];
      console.log(updatedQuestionsAnswers);
      updatedQuestionsAnswers[questionIndex].answers.push({
        text: "",
        is_true: state,
      });

      return { ...prevFormData, questionsAnswers: updatedQuestionsAnswers };
    });
  };
  const addQuestion = () => {
    const newQuestion: IQuestion = {
      feedback_true: "",
      feedback_false: "",
      text: "",
      answer_id: null,
      answers: [], // Initialize as an empty array
    };
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      questionsAnswers: [...prevFormData.questionsAnswers, newQuestion],
    }));
  };

  const handleFormDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (mode === AddEditMode.ADD) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    // console.log(formData);
    // onSubmitForm(formData);
  };
  useEffect(() => {
    setMode(
      location.pathname === "/quizzes" ? AddEditMode.ADD : AddEditMode.EDIT
    );
  }, []);

  return (
    <form className="main-card px-4 py-2" onSubmit={onSubmit}>
      <div className="d-flex align-items-center">
        <p className="header main-header">
          {mode === AddEditMode.ADD ? "New Quiz" : `${AddEditMode.EDIT}`}
        </p>
        <button
          onClick={addQuestion}
          className="d-block btn btn-primary ms-auto"
        >
          Add Question
        </button>
      </div>
      <div className="quiz-data mb-2">
        {/* title of quiz */}
        <FormGroup>
          <Label for="quizTitlle" className="text-capitalize ">
            title
          </Label>
          <Input
            id="quizTitlle"
            name="title"
            value={title}
            onChange={handleFormDataChange}
            type="text"
          />
        </FormGroup>

        {/* url */}
        <FormGroup>
          <Label for="quizUrl" className="text-capitalize ">
            url
          </Label>
          <Input
            id="quizUrl"
            name="url"
            value={url}
            onChange={handleFormDataChange}
            placeholder="write the Url of the youtube video"
          />
        </FormGroup>

        {/* score of quiz */}
        <FormGroup>
          <Label for="productPrice" className="text-capitalize">
            final score
          </Label>
          <Input
            id="productPrice"
            name="score"
            value={score}
            onChange={handleFormDataChange}
            type="number"
          />
        </FormGroup>

        {/* quiz desc */}
        <FormGroup>
          <Label for="quizDesc" className="text-capitalize ">
            quiz description
          </Label>
          <Input
            id="quizDesc"
            name="description"
            value={description}
            onChange={handleFormDataChange}
            type="textarea"
          />
        </FormGroup>
      </div>
      <div className="questions-data">
        <div className="questions">
          {questionsAnswers &&
            questionsAnswers.map((qa: IQuestion, questionIndex: number) => (
              <div className="question-block" key={questionIndex}>
                <p className="header"> Question {questionIndex + 1}</p>
                <div>
                  <FormGroup>
                    <Label>Question</Label>
                    <Input
                      type="text"
                      value={qa.text}
                      onChange={(e) =>
                        handleQuestionChange(
                          questionIndex,
                          "text",
                          e.target.value
                        )
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Right Answer Feedback</Label>
                    <Input
                      type="text"
                      value={qa.feedback_true}
                      onChange={(e) =>
                        handleQuestionChange(
                          questionIndex,
                          "feedback_true",
                          e.target.value
                        )
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Wrong Answer Feedback</Label>
                    <Input
                      type="text"
                      value={qa.feedback_false}
                      onChange={(e) =>
                        handleQuestionChange(
                          questionIndex,
                          "feedback_false",
                          e.target.value
                        )
                      }
                    />
                  </FormGroup>
                  {qa.answers.map((answer: IAnswer, answerIndex: number) => (
                    <div key={answerIndex}>
                      <FormGroup>
                        <Label>Answer {answerIndex + 1}</Label>
                        <Input
                          type="text"
                          value={answer.text}
                          onChange={(e) =>
                            handleAnswerChange(
                              questionIndex,
                              answerIndex,
                              e.target.value,
                              'text'
                            )
                          }
                        />
                      </FormGroup>
                      <FormGroup switch>
                        <Input
                          type="switch"
                          checked={state}
                          onClick={() => {
                            setState(!state);
                          }}
                          onChange={(e) =>
                            handleAnswerChange(
                              questionIndex,
                              answerIndex,
                              state,
                              'is_true'
                            )
                          }
                        />
                        <Label check>if this answer is correct</Label>
                      </FormGroup>
                    </div>
                  ))}
                  <button
                    className="btn"
                    onClick={() => addAnswer(questionIndex)}
                  >
                    Add Answer
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <button className="d-block btn btn-success ms-auto mt-2 " type="submit">
        submit
      </button>
    </form>
  );
};

export default AddEditQuiz;
