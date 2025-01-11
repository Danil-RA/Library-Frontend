import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import AdminNavbar from "../Components/AdminNavbar";

const AddBookPage = () => {
    const [id, setId] = useState()
    const [title, setTitle] = useState()
    const [author, setAuthor] = useState()
    const [genre, setGenre] = useState()
    const [publicationYear, setPublicationYear] = useState()
    const [isbn, setIsbn] = useState()
    const [url, setUrl] = useState()
  
    const navigate = useNavigate()
  
    // const [formData, setFormData] = useState({
    //   termsAccepted: false,
    // });

    const [errorMessage, setErrorMessage] = useState("")
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001/add-books', {id,title,author,genre,publicationYear,isbn,url,rentalStatus:true})
        .then(result => {
          console.log(result)
          navigate('/Admindashboard')
        })
        .catch(err => {
          if (err.response && err.response.status === 400) {
            setErrorMessage("book is already exists");
          }
          else {
            setErrorMessage("An error occurred. Please try again.");
          }
          console.error(err)
        })
    }
  
    return (
      <div>
        <AdminNavbar/>
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
              border: "1px solid white", // Set border thickness to 12px and color to white
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
              Enter the Book Details
            </h1>
  
  
            <label>Id</label>
            <input
              type="text"
              name="id"
              // value={formData.name}
              onChange={(e) => setId(e.target.value)}
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
  
            <label>Title</label>
            <input
              type="text"
              name="title"
              // value={formData.place}
              onChange={(e) => setTitle(e.target.value)}
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
  
            <label>Author</label>
            <input
              type="text"
              name="author"
              // value={formData.age}
              onChange={(e) => setAuthor(e.target.value)}
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
  
  
            <label>Genre</label>
            <input
              type="text"
              name="genre"
              // value={formData.email}
              onChange={(e) => setGenre(e.target.value)}
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
  
  
            <label>PublicationYear</label>
            <input
              type="number"
              name="publicationYear"
              // value={formData.password}
              onChange={(e) => setPublicationYear(e.target.value)}
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
  
            <label>Isbn</label>
            <input
              type="text"
              name="isbn"
              // value={formData.education}
              onChange={(e) => setIsbn(e.target.value)}
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
  
  
            <label>ImageUrl</label>
            <input
              type="text"
              name="url"
              // value={formData.contact}
              onChange={(e) => setUrl(e.target.value)}
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
              Enter
            </button>
            {errorMessage && (
              <p style={{ color: "red", marginBottom: "1rem" }}>{errorMessage}</p>)}
          </form>
        </div>
      </div>
      </div>
    );
  };

export default AddBookPage;
