import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import QuizzesTable from "../../components/quizzes-table/QuizzesTable";
import { getQuizzes } from "../../shared/functions/getQuizzes";

export interface IHomeProps {}
const Home: React.FC<IHomeProps> = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigte = useNavigate();

  /**
   * used to get the data from json file
   */
  const fetchData = async () => {
    const result = await getQuizzes();
    if (result) {
      setQuizzes(result);
    }
  };

  /**
   * used to navigate to the add page
   */
  const addQuiz = ()=>{
    navigte('/quizzes');
  }
  useEffect(() => {
    fetchData();
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
