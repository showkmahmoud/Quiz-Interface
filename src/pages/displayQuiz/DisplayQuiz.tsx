import React , { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IQuiz } from "../../shared/interfaces/quiz";
import { getQuizzes } from "../../shared/functions/getQuizzes";
const DisplayQuiz = () => {
    const [itemDetails, setItemDetails] = useState<IQuiz|null>();
    const { id } = useParams();
    const handleQuizItem = async () => {
      const data: IQuiz[] = await getQuizzes();
      const quizData: IQuiz | undefined = data.find(
        (item: any) => item.id === Number(id)
      );
      setItemDetails(quizData);
    };
    useEffect(() => {
      handleQuizItem();
    }, []);
  return (
    <div>
        {itemDetails?.title}
    </div>
  )
}

export default DisplayQuiz