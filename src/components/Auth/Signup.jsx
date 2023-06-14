import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signupService } from "../../services/auth.services";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const user = {
        email,
        password,
        name,
        lastName,
        username,
      };
      await signupService(user);
    //   navigate("/auth/login");
    console.log(user)
    } catch (error) {
      console.log(error);
       if (error.response.status === 400) {
         setErrorMessage(error.response.data.message);
       } else {
         console.log(error);
        // navigate("/error")
       }
    }
  };
  return (
    <div>
      Signup
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <button type="submit">
          Sign Up
        </button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
    </div>
  );
}

export default Signup;
