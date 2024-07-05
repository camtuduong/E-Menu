import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { register } from "../../Api/api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    // Kiểm tra mật khẩu chứa ít nhất một chữ cái
    if (!/[a-zA-Z]/.test(password)) {
      alert("Password must contain at least one letter.");
      return;
    }

    try {
      await register(name, email, password);
      // Registration successful
      setName("");
      setEmail("");
      setPassword("");
      alert("Registration successful!");
    } catch (error) {
      // Registration failed
      console.error(error);
      alert("Registration failed. Please check your email.");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="register-container">
      <form className="form-sign">
        <div className="title-sign">Register</div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="your user name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="yourrmail@gmai.ccc"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-password-button"
              onClick={toggleShowPassword}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <button className="btn-register" type="submit" onClick={handleRegister}>
          Register
        </button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
