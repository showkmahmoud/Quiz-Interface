import React, { useState } from "react";
import QuizzesTable from "../../components/quizzes-table/QuizzesTable";

export interface IHomeProps {}
const Home: React.FC<IHomeProps> = () => {
  const [quizzes, setQuizzes] = useState([]);
  return (
    <>
      <QuizzesTable data={quizzes} />
    </>
  );
};

export default Home;
