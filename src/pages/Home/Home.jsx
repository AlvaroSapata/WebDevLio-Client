import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <h3>Welcome to WebDevLio</h3>
        <h5>
          "WebDevLio" is a website designed for users who still do not have
          sufficient knowledge to create their own virtual portfolio.
          <br />
          WebDevLio offers a robust, fast, and visually appealing way to create
          your portfolio.
          <br />
          Simply register, fill in the fields, and you're ready to go. You will
          have your own portfolio within minutes.
        </h5>
      </div>
      <div>
        <p>Dont you have an account yet?</p>
        <p>Register Here</p>
        <Link to="/signup">Sign Up</Link>
      </div>
      <div>
        <p>Already have an account?</p>
        <p>Login Here</p>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <p>Search any Profile</p>
      </div>
    </div>
  );
}

export default Home;
