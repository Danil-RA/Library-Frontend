import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  // const navLinkStyle = {
  //   color: 'white',
  //   textDecoration: 'none',
  //   fontSize: '1.2rem',
  //   fontWeight: '500',
  //   letterSpacing: '1px',
  //   textTransform: 'uppercase',
  //   transition: 'color 0.3s ease',
  // };
  return (
    <nav style={{
      backgroundColor: '#222',
      padding: '1rem 2rem',
      color: 'white',
      fontFamily: 'monospace',
      fontWeight: 'bold',
    }}
  >
    <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      ></div>

      <h1
        style={{
          color: 'red',
          fontSize: '2rem',
        }}
      >
        Admin Dashboard
      </h1>

      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: '30px',
          margin: 0,
          padding: 0,
          justifyContent: 'center',
          flexGrow: 1,
        }}
      >
        <li>
          <Link to="/Admindashboard" style={{ color: '#DDE9F2', textDecoration: 'none', fontSize: '1.2rem' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/add-books" style={{ color: '#DDE9F2', textDecoration: 'none', fontSize: '1.2rem' }}>
            Add Book
          </Link>
        </li>

        <li>
          <Link to="/adminbooks" style={{ color: '#DDE9F2', textDecoration: 'none', fontSize: '1.2rem' }}>
            Books
          </Link>
        </li>

        <li>
          <Link to="/users" style={{ color: '#DDE9F2', textDecoration: 'none', fontSize: '1.2rem' }}>
            Our users
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
