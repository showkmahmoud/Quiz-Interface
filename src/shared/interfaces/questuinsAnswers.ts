export interface IAnswer {
  id: number;
  is_true: boolean;
  text: string;
}
export interface IQuestion {
  id?: number;
  answer_id: number | null;
  answers: IAnswer[];
  feedback_false: string;
  feedback_true: string;
  text: string;
}
