import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Other/Navbar";
import Home from "./pages/Home/Home.jsx";
// Auth
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
// Errors
import Error from "./pages/Errors/Error";
import NotFound from "./pages/Errors/NotFound";
import LoggedHome from "./pages/LoggedHome/LoggedHome";

import { AuthContext } from "./context/auth.context";
import { useContext } from "react";

function App() {
  const { isLoggedIn, user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="App">
      <Navbar />

      {isLoggedIn ? (
        <div>
          <Routes>
            {/* <Navigate to={`/portfolio/${user._id}`} replace={true} /> */}
            <Route path="/" element={<LoggedHome />} />
          </Routes>
        </div>
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />

            <Route path="/error" element={<Error />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
