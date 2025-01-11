
import { Helmet } from 'react-helmet';
import { FaBookBookmark } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css'
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import AdminNavbar from '../Components/AdminNavbar';


function AdminBooks() {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch books from the backend when the component mounts
        axios.get('http://localhost:3001/books')  // API endpoint
          .then((response) => {
            setBooks(response.data);  // Set the books in state
          })
          .catch((error) => {
            console.error('Error fetching books:', error);
          });
      }, []);

    const handleBookClick = (book) => {
        console.log('Book clicked:', book); // Log book details
        //alert(`You clicked on the book: ${book.title}`);
        navigate('/singlebookpage', { state: { book } })
      };
  return (
    <div>
         <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet" />
            </Helmet>
            <AdminNavbar/>

            <div style={{ fontFamily: 'Roboto, sans-serif', paddingTop: '5rem', backgroundColor: 'black' }}>

                <div style={{ textAlign: 'center', backgroundColor: 'black',color:'red',fontFamily:'monospace',fontSize:'25px'}}><h1>Books</h1></div>

                <div style={{
                    backgroundColor: 'black',
                    marginTop: '5rem',
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    width: '100%',
                    fontFamily: 'Roboto, sans-serif'
                }}>
                    {books.map((book) => (
                            <button className='card-button' style={{
                                width:'20%',
                                height:'15rem',
                                textAlign:'center',
                                backgroundColor: '#DDE6ED',
                                borderRadius:'25px'
                                }} onClick={()  => handleBookClick(book)}
                                key={book.id} >
                                <div className='card' style={{ backgroundColor: '#DDE6ED', borderRadius: '25px' }}>
                                <div style={{ textAlign: 'center', marginTop: '2rem' }}> <FaBookBookmark size={50} /> </div>
                                <div style={{ textAlign: 'center', marginTop: '3rem' }}><h2>{book.title}</h2></div>
                            </div>
                            </button>
                            
                    ))}

                </div>
            </div>
    </div>
  );
}

export default AdminBooks