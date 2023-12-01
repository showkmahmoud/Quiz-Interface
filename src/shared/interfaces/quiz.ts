import { IQuestion } from "./questuinsAnswers";

export interface IQuiz {
  created: string;
  description: string;
  id?: number;
  modified: string;
  questions_answers: IQuestion[] | [];
  score: number;
  title: string;
  url: string;
}
