import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavComp from "./core/navbar/Nav";
import Home from "./pages/home/Home";
import '../src/shared/styles/style.css'
import AddEditQuiz, { IAddEditQuiz } from "./pages/addEditQuiz/AddEditQuiz";

function App() {
  const additionalProps: IAddEditQuiz = {
    onSubmitForm: undefined,
    selectedQuiz: undefined,
    children: undefined
  };
  return (
    <Router>
      <NavComp />
      <div className="container container-wrapper">
        <Routes>
          <Route index path="/" Component={Home}/>
          <Route
          path="/quizzes"
          element ={<AddEditQuiz  {...additionalProps} />}
      />
         <Route
          path="/quizzes/:id"
          element ={<AddEditQuiz  {...additionalProps} />}
      />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
