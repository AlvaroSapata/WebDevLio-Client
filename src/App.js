import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Other/Navbar";
import Home from "./pages/Home/Home.jsx";
// Auth
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
// Errors
import Error from "./pages/Errors/Error";
import NotFound from "./pages/Errors/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
