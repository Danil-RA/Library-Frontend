import React, {useState,useEffect} from 'react';
import lib from '../images/Library.jpg';
import '../styles/styles.css';
import NavBar1 from '../Components/Navbar1';
import Footer from '../Components/Footer';
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


function Landing() {
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);

  const handleBookClick = (bookId) => {
    // Navigate to the login page with the book ID
    navigate(`/login?bookId=${bookId}`);
  };

  const handleAllBooksClick = () => {
    // Navigate to the login page
    navigate('/login');
  };

  useEffect(() => {
    axios.get('http://localhost:3001/books')
        .then((response) => {
            setBooks(response.data);
        })
        .catch((error) => {
            console.error('Error fetching books:', error);
        });
}, []);


  return (
    <div>
      <NavBar1 />
      {/* Header Section */}
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.9)',
          width: '100%',
          height: '90vh',
          fontFamily: 'Roboto',
          textAlign: 'center',
          fontSize: '2rem',
          color: '#DDE6ED',
          overflow: 'hidden',
        }}
      >
        <img
          src={lib}
          alt="Library Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: '-1',
          }}
        />
        <div style={{ paddingTop: '17rem' }}>
          <q>
            <i>In the library, you find the world at your fingertips.</i>
          </q>
        </div>
        <div className="GetStarted">
          <button onClick={() => navigate('/login')}>Get Started</button>
        </div>
      </div>

      {/* Books Section */}
      <div
        style={{
          fontFamily: 'Roboto, sans-serif',
          paddingTop: '5rem',
          backgroundColor: 'black',
          color: 'white',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h1>Books</h1>
        </div>
        <div
          style={{
            marginTop: '5rem',
            display: 'flex',
            gap: '1rem',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            width: '100%',
          }}
        >
          {books
            .sort(() => Math.random() - 0.5)
            .slice(0, 20)
            .map((book) => (
              <button
                className="card-button"
                style={{
                  width: '250px',
                  height: '380px',
                  backgroundColor: 'black',
                  borderRadius: '15px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '1rem',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onClick={() => handleBookClick(book)}
                key={book.id}
              >
                <div>
                  <img
                    src={book.url}
                    alt={book.title}
                    style={{
                      width: '100%',
                      height: '290px',
                      objectFit: 'cover',
                      borderRadius: '10px',
                    }}
                  />
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <h2
                    style={{
                      fontSize: '1.2rem',
                      color: 'white',
                      marginBottom: '0.5rem',
                      fontFamily: 'monospace',
                    }}
                  >
                    {book.title}
                  </h2>
                </div>
              </button>
            ))}
        </div>

        {/* All Books Button */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button
            onClick={handleAllBooksClick}
            style={{
              fontSize: '1.3rem',
              fontFamily: 'Bahnschrift',
              backgroundColor: 'black',
              border: 'none',
              textDecoration: 'none',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            All Books <BsArrowRight />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Landing;