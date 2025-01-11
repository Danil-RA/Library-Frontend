import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);

        const { userDetails } = result.data; // Assuming userDetails is returned in the response
        localStorage.setItem("userDetails", JSON.stringify(userDetails));

        navigate("/userhome");
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          setErrorMessage("Email or password is incorrect");
        } else {
          setErrorMessage("An error occurred. Please try again.");
        }
        console.error(err);
      });
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000", // Dark black background
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "2.5rem",
          backgroundColor:'#222', // Dark gray for the form
          border: "1px solid #fff", // White border for visibility
          borderRadius: "12px",
          width: "600px", // Increased size
          boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)", // Subtle shadow
        }}
      >
        <h1
          style={{
            textAlign: "center",
    marginBottom: "2rem",
    fontFamily: "monospace", // Futuristic font
    color: "#ff0000", // Bright red
    fontSize: "2.5rem", // Slightly larger size for impact
    fontWeight: "700", // Bold weight
    letterSpacing: "2px", // Adds a futuristic touch
    textTransform: "uppercase",
          }}
        >
          Login
        </h1>

        <label style={{ color: "#A4BFCC", marginBottom: "0.6rem" }}>Email ID:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "0.8rem",
            marginBottom: "1rem",
            border: "1px solid #ccc",
            borderRadius: "6px",
            outline: "none",
            backgroundColor: "#2e2e2e",
            color: "#fff",
            fontSize: "1rem",
          }}
        />

        <label style={{ color: "#A4BFCC", marginBottom: "0.6rem" }}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: "0.8rem",
            marginBottom: "1.5rem",
            border: "1px solid #ccc",
            borderRadius: "6px",
            outline: "none",
            backgroundColor: "#2e2e2e",
            color: "#fff",
            fontSize: "1rem",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "0.9rem",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#ff0000", // Red for the button
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.1rem",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
          }}
        >
          Login
        </button>
        <p style={{
            marginTop: "1.5rem",
            color: "#fff",
            textAlign: "center",
            fontSize: "1rem",
          }}>
          New user?{" "}
          <button
            onClick={() => (window.location.href = "/signup")}
            style={{
              color: "#ff0000",
              background: "none",
              border: "none",
              textDecoration: "underline",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Sign up
          </button>
        </p>

        {errorMessage && (
          <p style={{ color: "red", marginBottom: "1rem" }}>{errorMessage}</p>
        )}
      </form>

      {/* Membership Section */}
      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
          padding: "1rem",
          backgroundColor: "#DDE9F2",
          borderRadius: "12px",
          width: "400px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        <p style={{ color: "#1E2A41", marginBottom: "0.5rem" }}>
          Don't have a membership card?
        </p>
        <Link
          to="/membership"
          style={{
            textDecoration: "none",
            color: "#3A5A75",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Apply for a Membership Card
        </Link>
      </div>
    </div>
  );
};

export default Login;
