import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "password") {
      onLogin();
      navigate("/Admindashboard");
    } else {
      setErrorMessage("Invalid username or password.");
    }
  };

  const loginContainerStyle = {
    height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000", // Dark black background
  };

  const headingStyle = {
    fontSize: "30px",color: "red",textAlign: "center",marginBottom: "20px",
  };

  const labelStyle = {
    color: "#ECF0F1",fontSize: "15px",marginBottom: "8px",
  };

  const formStyle = {
    display: "flex",flexDirection: "column",width: "300px",backgroundColor: "#222",padding: "30px",borderRadius: "10px",
    boxShadow: "0 8px 6px rgba(0, 0, 0, 0.1)",border: "1px solid white",
  };

  const inputStyle = {
    padding: "10px",marginBottom: "15px",backgroundColor: "white",borderRadius: "5px",color: "black",border: "1px solid white",
  };

  const buttonStyle = {
    padding: "15px",backgroundColor: isHovered ? "#222" : "red",color: "white",borderRadius: "5px",
    fontSize: "20px",cursor: "pointer",transition: "background-color 0.3s, transform 0.2s",transform: isHovered ? "scale(1.05)" : "scale(1)",border: "1px solid white",
  };

  const errorStyle = {
    color: "red",fontSize: "15px",marginBottom: "10px",
  };

  React.useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
  }, []);

  return (
    <div style={loginContainerStyle}>
      <form style={formStyle} onSubmit={handleLogin}>
        <h1 style={headingStyle}>Admin Login</h1>
        <label style={labelStyle}>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
        <label style={labelStyle}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        {errorMessage && <p style={errorStyle}>{errorMessage}</p>}
        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLoginPage;
