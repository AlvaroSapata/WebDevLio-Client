import React, { useState, useContext } from 'react'
import { loginService } from '../../services/auth.services';
import {useNavigate} from "react-router-dom"
import { AuthContext } from '../../context/auth.context';
function Login() {

    const { authenticateUser } = useContext(AuthContext)

    const navigate = useNavigate()
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
   try {
    //token con las credenciales
    const response = await loginService({
        email: email,
        password: password
    })

     //2. guardamos el token en el local storage
     localStorage.setItem("authToken", response.data.authToken);
     await authenticateUser()
     //3. redireccionamos a la pantalla privada para solo usuarios
     navigate("/");
   } catch (error) {
    console.log(error)
    // if (error.response.status === 400) {
    //     setErrorMessage(error.response.data.message);
    //   } else {
    //     navigate("/");
    //   }
   }
  }

  return (
    <div>
     <h2>Login</h2>
     <form onSubmit={handleLogin}>
        <div>
            <label>Email</label>
            <input type="email" value={email} onChange={handleEmailChange} />
        </div>

        <div>
            <label>password</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
        </div>

        <br />
        <button type="submit" style={{ width: "auto" }}>Log In</button>
        <br />
        {errorMessage && <p style={{ color: "#03e9f4" }}>{errorMessage}</p>}
     </form>

    </div>
  )
}

export default Login