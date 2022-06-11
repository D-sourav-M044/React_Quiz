import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Result" element={<Result />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
