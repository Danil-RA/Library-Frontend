import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import NavBar from '../Components/Navbar';

function Bookdetails() {
  const location = useLocation();
  const { book } = location.state || {};
  const navigate = useNavigate();
  // const [isRented, setIsRented] = useState(book?.isRented || false);

  const goBack = () => {
    console.log('Back clicked');
    navigate('/allbooks');
  };

  // const toggleRentalStatus = () => {
  //   setIsRented((prevStatus) => !prevStatus);
  // };

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
          <p style={{ fontSize: '20px', marginBottom: '10px', fontFamily: 'monospace' }}>
            ISBN: <span style={{ color: 'white' }}>{book.isbn}</span>
          </p>
          <p style={{ fontSize: '20px', marginBottom: '20px', fontFamily: 'monospace' }}>
            Rental Status: <span style={{ color: book.rentalStatus ? 'green' : 'red' }}>
              {book.rentalStatus ? 'Available' : 'Not Available'}
            </span>
          </p>
          {/* <button
            onClick={toggleRentalStatus}
            style={{
              backgroundColor: isRented ? 'green' : 'red',
              color: 'white',
              fontSize: '18px',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              marginBottom: '20px',
              transition: 'all 0.3s ease',
            }}
          >
            {isRented ? 'Make Available' : 'Rent'}
          </button> */}
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
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = 'white') || (e.target.style.color = 'red')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = 'red') || (e.target.style.color = 'white')}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bookdetails;
