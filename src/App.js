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
import Portfolio from "./pages/Portfolio/Portfolio";

import { AuthContext, AuthWrapper } from "./context/auth.context";
import { useContext } from "react";
import HomeProfile from "./components/HomeProfile/HomeProfile";


function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="App">
      <Navbar />
      
      {isLoggedIn?<Portfolio/> : <Home /> }
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/:userId/portfolio" element={<Portfolio/>} />
        <Route path="/:userId/homeProfile" element={<HomeProfile/>} />


        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
