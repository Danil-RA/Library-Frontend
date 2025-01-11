import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../Components/Navbar';
import { AiFillLike } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

function SinglePage() {
  const location = useLocation();
  const { book } = location.state || {};
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/books');
  };

  const [userDetails, setUserDetails] = useState();
  const [Like, setLike] = useState(0);
  const [comment, setComment] = useState("");
  const [inputComment, setInputComment] = useState("");

  useEffect(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (storedUserDetails) {
      setUserDetails(storedUserDetails);
    }
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/Like', { params: { title: book.title } })
      .then((response) => setLike(response.data))
      .catch((error) => console.error('Error fetching likes:', error));
  }, [book.title]);

  useEffect(() => {
    axios.get('http://localhost:3001/comment', { params: { title: book.title } })
      .then((response) => setComment(response.data))
      .catch((error) => console.error('Error fetching comments:', error));
  }, [book.title]);

  const handleRentBook = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/singlepage', {
      name: userDetails.name,
      title: book.title,
      email: userDetails.email,
      status: "Pending",
      ExpiryTime: null,
      Expire: false
    })
      .then(() => navigate('/bookrequest'))
      .catch((err) => console.error('Error renting the book:', err));
  };

  const handleLike = (e) => {
    e.preventDefault();
    axios.put('http://localhost:3001/like', { title: book.title })
      .then(() => setLike((prev) => prev + 1))
      .catch((err) => console.error('Error liking the book:', err));
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (!inputComment.trim()) return;
    axios.put('http://localhost:3001/comment', { title: book.title, inputComment })
      .then(() => {
        setComment((prev) => `${prev},${inputComment}`);
        setInputComment("");
      })
      .catch((err) => console.error('Error adding comment:', err));
  };

  if (!book) {
    return (
      <div
        style={{
          height: '100vh',
          backgroundColor: 'black',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <p>No book selected. Please go back and select a book.</p>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div
        style={{
          height: '100vh',
          backgroundColor: 'black',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '40px',
            alignItems: 'center',
            flexDirection: 'row',
            textAlign: 'left',
          }}
        >
          {/* Book Cover */}
          <div>
            <img
              src={book.url || 'https://via.placeholder.com/300x400?text=No+Cover+Available'}
              alt={book.title}
              style={{
                width: '300px',
                height: '400px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(255, 255, 255, 0.2)',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Book Details */}
          <div>
            <h1
              style={{
                fontSize: '50px',
                marginBottom: '20px',
                color: 'red',
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              Book Details
            </h1>
            <h2
              style={{
                fontSize: '30px',
                marginBottom: '10px',
                textTransform: 'capitalize',
              }}
            >
              Title: <span style={{ color: 'white', fontFamily: 'monospace' }}>{book.title}</span>
            </h2>
            <p style={{ fontSize: '20px', marginBottom: '10px', fontFamily: 'monospace' }}>
              BookId: <span style={{ color: 'white' }}>{book.id}</span>
            </p>
            <p style={{ fontSize: '20px', marginBottom: '10px', fontFamily: 'monospace' }}>
              Author: <span style={{ color: 'white' }}>{book.author}</span>
            </p>
            <p style={{ fontSize: '20px', marginBottom: '10px', fontFamily: 'monospace' }}>
              Genre: <span style={{ color: 'white' }}>{book.genre}</span>
            </p>
            <p style={{ fontSize: '20px', marginBottom: '10px', fontFamily: 'monospace' }}>
              Publication Year: <span style={{ color: 'white' }}>{book.publicationYear}</span>
            </p>
            <p style={{ fontSize: '20px', marginBottom: '20px', fontFamily: 'monospace' }}>
              ISBN: <span style={{ color: 'white' }}>{book.isbn}</span>
            </p>

            <button
              onClick={handleRentBook}
              style={{
                backgroundColor: 'red',
                color: 'black',
                fontSize: '18px',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
              }}
            >
              Rent Book
            </button>
            <button
              onClick={goBack}
              style={{
                backgroundColor: 'red',
                color: 'black',
                fontSize: '18px',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
                marginLeft: '10px',
              }}
            >
              Back
            </button>
            <br /><br />
            <button
              onClick={handleLike}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <AiFillLike style={{ color: 'red', fontSize: '35px' }} /> {Like > 0 ? Like : ""}
            </button>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px', color: 'white' }}>
        <h2 style={{ color: 'red', textTransform: 'uppercase', fontFamily:'monospace',fontSize:'25px' }}>Comments</h2>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '20px',
          }}
        >
          <FaUserCircle style={{ fontSize: '24px', color: 'red' }} />
          <input
            name="bookcomment"
            placeholder="Add a comment"
            onChange={(e) => setInputComment(e.target.value)}
            style={{
              flex: '1',
              padding: '10px',
              border: '1px solid red',
              borderRadius: '5px',
              backgroundColor: 'black',
              color: 'white',
            }}
          />
          <button
            onClick={handleComment}
            style={{
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '5px',
              cursor: 'pointer',
              textTransform: 'uppercase',
            }}
          >
            Post
          </button>
        </div>

        <div>
          {comment.split(',').map((c, index) => (
            c.trim() && (
              <div
                key={index}
                style={{
                  backgroundColor: 'black',
                  padding: '10px',
                  borderRadius: '5px',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <FaUserCircle style={{ fontSize: '24px', color: 'red' }} />
                <div>
                  <p style={{ margin: '0', color: 'red', fontFamily:'monospace' }}>Anonymous User</p>
                  <p style={{ margin: '0', color: 'white' }}>{c}</p>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
