import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavComp from "./core/navbar/Nav";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <NavComp />
      <div className="container">
        <Routes>
          <Route path="/" Component={Home}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
