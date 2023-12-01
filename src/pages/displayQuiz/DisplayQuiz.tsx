import React , { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IQuiz } from "../../shared/interfaces/quiz";
import { getQuizzes } from "../../shared/functions/getQuizzes";
import QuizQuestion from "../../components/quizQuestion/QuizQuestion";

const DisplayQuiz = () => {
    const [itemDetails, setItemDetails] = useState<IQuiz>({
        created: '',
        description: '',
        modified: '',
        questions_answers: [],
        score: 0,
        title: '',
        url: '',
    });
    const { id } = useParams();
    const handleQuizItem = async () => {
      const data: IQuiz[] = await getQuizzes();
      const quizData: IQuiz | undefined = data.find(
        (item: any) => item.id === Number(id)
      );
      if(quizData)setItemDetails( quizData);
    };
    useEffect(() => {
      handleQuizItem();
    }, []);
  return (
    <div>
        <QuizQuestion quizeData = {itemDetails}/>
    </div>
  )
}

export default DisplayQuiz