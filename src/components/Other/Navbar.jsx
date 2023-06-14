import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, authenticateUser } = useContext(AuthContext);
  const handleLogout = () => {
    // 1. Borrar el token
    localStorage.removeItem("authToken");

    // 2. validar contra el BE que el token fue borrado
    authenticateUser();

    // 3. Redirigir
    navigate("/");
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
      {isLoggedIn?(<button onClick={handleLogout}>Log out</button>):null}
    </div>
  );
}

export default Navbar;
