import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/Navbar";

const Userhome = () => {
  const navigate = useNavigate();

  const handleAllBooks = () => {
    navigate("/allbooks");
  };

  const handleAvailableBooks = () => {
    navigate("/books");
  };

  return (
    <div>
      <NavBar />
      <div style={styles.homepageContainer}>
        <div style={styles.buttonContainer}>
          <button style={styles.customButton} onClick={handleAllBooks}>
            All Books
          </button>
          <button style={styles.customButton} onClick={handleAvailableBooks}>
            Available Books
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  /* General styling */
  homepageContainer: {
    backgroundImage:
      "url('https://cdn.pixabay.com/photo/2014/09/26/16/38/books-462579_1280.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  /* Button container */
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },

  /* Button styling */
  customButton: {
    backgroundColor: "#dc3545", // Red color
    color: "white",
    fontSize: "2rem", // Larger button text
    fontWeight: "bold",
    padding: "1.5rem 3rem", // Larger button size
    border: "none",
    borderRadius: "15px",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    width: "350px",
    textAlign: "center",
  },

  /* Hover effect */
  customButtonHover: {
    transform: "scale(1.1)", // Slightly enlarge on hover
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.5)", // Add shadow effect
  },

  /* Media query for responsiveness */
  "@media (maxWidth: 768px)": {
    customButton: {
      width: "300px",
      fontSize: "1.5rem",
      padding: "1rem 2rem",
    },
  },
};

// Add hover effect using JavaScript
document.addEventListener("mouseover", (event) => {
  if (event.target.matches("button")) {
    event.target.style.transform = styles.customButtonHover.transform;
    event.target.style.boxShadow = styles.customButtonHover.boxShadow;
  }
});

document.addEventListener("mouseout", (event) => {
  if (event.target.matches("button")) {
    event.target.style.transform = "scale(1)";
    event.target.style.boxShadow = "none";
  }
});

export default Userhome;
