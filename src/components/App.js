import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
         <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<PublicRoute><Signup /></PublicRoute>} />
            <Route path="/Login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/Quiz/:id" element={<PrivateRoute><Quiz /></PrivateRoute>} />
            <Route path="/Result/:id" element={<PrivateRoute><Result /></PrivateRoute>} />
          </Routes>
        </Layout> 
      </AuthProvider>
    </Router>
  );
}

export default App;
