import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { login } from "../../Api/api";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Invalid email or password
        setEmail("");
        setPassword("");
        alert("Email hoặc mật khẩu không đúng! Vui lòng thử lại.");
      } else {
        // Other error occurred
        console.error(error);
      }
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleLogin}>
        <div className="title">Sign in</div>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="yourrmail@gmai.ccc"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <a href="#">Forgot your password?</a>{" "}
        <Link className="register" to="/register">
          Register
        </Link>
        <button className="btn-sign">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
