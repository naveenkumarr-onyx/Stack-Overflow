import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./AllRoutes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
    dispatch(fetchAllQuestions());
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
