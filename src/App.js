// import { Button, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

// import Navbar from "./components/navbar.component"
import ExercisesList from "./components/ExercisesList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      {/* <div className="container">Hello World</div> */}
      <Routes>
        <Route part="/" element={<ExercisesList />} />
        <Route part="/edit/:id" element={<EditExercise  />} />
        <Route part="/create" element={<CreateExercise  />} />
        <Route part="/user" element={<CreateUser  />} />
      </Routes>
    </Router>
  );
}

export default App;
