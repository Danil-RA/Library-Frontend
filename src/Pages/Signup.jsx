import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {

  const [name, setName] = useState()
  const [place, setPlace] = useState()
  const [age, setAge] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [education, setEducation] = useState()
  const [contact, setContact] = useState()
  const [phone, setPhone] = useState()

  const navigate = useNavigate()





  const [formData, setFormData] = useState({
    //   name: "",
    //   place: "",
    //   age: "",
    //   email: "",
    //   password: "",
    //   education: "",
    //   contact: "",
    //   phone: "",
    termsAccepted: false,
  });

  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: type === "checkbox" ? checked : value,
  //   });
  // };

  const [errorMessage, setErrorMessage] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/signup', { name, place, age, email, password, education, contact, phone,NoOfBooks: 0 })
      .then(result => {
        console.log(result)
        navigate('/login')
      })
      .catch(err => {
        if (err.response && err.response.status === 400) {
          setErrorMessage("User with this email already exists. Please use a different email.");
        }
        else {
          setErrorMessage("An error occurred. Please try again.");
        }
        console.error(err)
      })
  }

  return (
    <div
      style={{
        minHeight: "120vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "black",
        paddingBottom: "3rem", // Adds spacing below the form for the footer
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "8rem", // Adjust spacing below the navbar
          width: "100%",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "2.5rem",
            backgroundColor: "#222",
            borderRadius: "12px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
            width: "600px",
            color: "#DDE9F2",
            marginBottom: "2rem", // Adds some space between the form and the footer
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
    textTransform: "uppercase", // Makes it look modern and clean
  }}
>
            Signup
          </h1>


          <label>Name:</label>
          <input
            type="text"
            name="name"
            // value={formData.name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              padding: "0.8rem",
            marginBottom: "1.5rem",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "6px",
            color: "#fff",
            fontSize: "1rem",
            }}
          />

          <label style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>Place:</label>
          <input
            type="text"
            name="place"
            // value={formData.place}
            onChange={(e) => setPlace(e.target.value)}
            required
            style={{
              padding: "0.8rem",
              marginBottom: "1.5rem",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "6px",
              color: "#fff",
              fontSize: "1rem",
            }}
          />

          <label style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>Age:</label>
          <input
            type="number"
            name="age"
            // value={formData.age}
            onChange={(e) => setAge(e.target.value)}
            required
            style={{
              padding: "0.8rem",
              marginBottom: "1.5rem",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "6px",
              color: "#fff",
              fontSize: "1rem",
            }}
          />


          <label style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>Email ID:</label>
          <input
            type="email"
            name="email"
            // value={formData.email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "0.8rem",
              marginBottom: "1.5rem",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "6px",
              color: "#fff",
              fontSize: "1rem",
            }}
          />


          <label style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>Password:</label>
          <input
            type="password"
            name="password"
            // value={formData.password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "0.8rem",
              marginBottom: "1.5rem",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "6px",
              color: "#fff",
              fontSize: "1rem",
            }}
          />

          <label style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>Education:</label>
          <input
            type="text"
            name="education"
            // value={formData.education}
            onChange={(e) => setEducation(e.target.value)}
            style={{
              padding: "0.8rem",
              marginBottom: "1.5rem",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "6px",
              color: "#fff",
              fontSize: "1rem",
            }}
          />


          <label style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>Contact Details:</label>
          <input
            type="text"
            name="contact"
            // value={formData.contact}
            onChange={(e) => setContact(e.target.value)}
            required
            style={{
              padding: "0.8rem",
              marginBottom: "1.5rem",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "6px",
              color: "#fff",
              fontSize: "1rem",
            }}
          />


          <label style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            // value={formData.phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={{
              padding: "0.8rem",
              marginBottom: "1.5rem",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "6px",
              color: "#fff",
              fontSize: "1rem",
            }}
          />


          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "2rem",
              color: "#A4BFCC",
            }}
          >
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  termsAccepted: e.target.checked,
                }))
              }
              required
              style={{ marginRight: "0.7rem" }}
            />
            <label>
              I agree to the terms: A fine will be charged for late or damaged books.
            </label>
          </div>

          <button
            type="submit"
            style={{
              padding: "1rem",
              border: "none",
              marginTop: "1.5rem",
              borderRadius: "6px",
              backgroundColor: "#ff0000",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.1rem",
              cursor: "pointer",
            }}
          >
            Signup
          </button>
          {errorMessage && (
            <p style={{ color: "red", marginBottom: "1rem" }}>{errorMessage}</p>)}
        </form>
      </div>
    </div>
  );
};

export default Signup;
