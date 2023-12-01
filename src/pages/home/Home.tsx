import React, { useState, useEffect } from "react";
import QuizzesTable from "../../components/quizzes-table/QuizzesTable";
import { getQuizzes } from "../../shared/functions/getQuizzes";

export interface IHomeProps {}
const Home: React.FC<IHomeProps> = () => {
  const [quizzes, setQuizzes] = useState([]);

  const fetchDataFromApi = async () => {
    const result = await getQuizzes();
    if (result) {
      setQuizzes(result);
    }
  };
  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return (
    <>
      <QuizzesTable data={quizzes} />
    </>
  );
};

export default Home;
