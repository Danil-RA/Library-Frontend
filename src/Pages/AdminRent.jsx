import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../Components/AdminNavbar';

function AdminRent() {
//   const navigate = useNavigate();
  const [rentBooks, setRentBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the backend when the component mounts
    axios.get('http://localhost:3001/AdminRent')  // API endpoint
      .then((response) => {
        setRentBooks(response.data);  // Set the books in state
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });

    // Cleanup function to clear interval when the component unmounts
    return () => clearInterval(intervalId);
  });

  const checkExpiry = () => {
    const currentTime = new Date();

    const updatedRentBooks = rentBooks.map((request) => {
      const isExpired = request.ExpiryTime && currentTime > new Date(request.ExpiryTime);

    
      return { 
        ...request,
        isExpired,
        Expire: isExpired ? true : request.Expire
      };
    });

    setRentBooks(updatedRentBooks);  // Update the state with the modified rentBooks

    console.log('Checked at:', currentTime.toLocaleTimeString());
    console.log(updatedRentBooks);
  };

  const intervalId = setInterval(checkExpiry, 10000);

  return (
    <div>
     <AdminNavbar/>
       <div
           style={{
               backgroundColor: '#121212',
               color: '#FFFFFF',
               padding: '2rem',
               minHeight: '100vh',
               fontFamily: 'Roboto, sans-serif',
           }}
       >
           <div
               style={{
                   textAlign: 'center',
                   marginBottom: '2rem',
               }}
           >
               <h1
                   style={{
                       color: 'red',
                       fontFamily: 'monospace',
                       fontSize: '2.5rem',
                       margin: 0,
                   }}
               >
                   Rented Books
               </h1>
           </div>

           <div
               style={{
                   display: 'flex',
                   gap: '1.5rem',
                   justifyContent: 'center',
                   alignItems: 'center',
                   flexWrap: 'wrap',
                   width: '100%',
               }}
           >
               {rentBooks.map((rentBook) =>
                   rentBook.status === 'Accepted' ? (
                       <div
                           className="card-container"
                           key={rentBook._id}
                           style={{
                               width: '200px',
                               height: '120px',
                               backgroundColor: '#1E1E1E',
                               borderRadius: '20px',
                               boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                               display: 'flex',
                               flexDirection: 'column',
                               justifyContent: 'center',
                               alignItems: 'center',
                               padding: '1rem',
                               textAlign: 'center',
                               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                               border: '1px solid #E94560',
                           }}
                       >
                           <h2
                               style={{
                                   fontSize: '1.5rem',
                                   color: '#E94560',
                                   fontFamily: 'monospace',
                                   marginBottom: '1rem',
                               }}
                           >
                               {rentBook.title}
                           </h2>
                           <h3
                               style={{
                                   fontSize: '1.2rem',
                                   color: '#FFFFFF',
                               }}
                           >
                               Rented By: {rentBook.name}
                           </h3>
                       </div>
                   ) : null
               )}
           </div>
       </div>
       </div>
   );
}

export default AdminRent;