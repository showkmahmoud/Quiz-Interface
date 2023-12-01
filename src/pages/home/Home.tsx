import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import QuizzesTable from "../../components/quizzes-table/QuizzesTable";
import { getQuizzes } from "../../shared/functions/getQuizzes";

export interface IHomeProps {}
const Home: React.FC<IHomeProps> = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigte = useNavigate();

  const fetchDataFromApi = async () => {
    const result = await getQuizzes();
    if (result) {
      setQuizzes(result);
    }
  };
  const addQuiz = ()=>{
    navigte('/quizzes');
  }
  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return (
    <>
      <button className="btn btn-primary d-block ms-auto "
      onClick={addQuiz}>Add</button>
      <QuizzesTable data={quizzes} />
    </>
  );
};

export default Home;
