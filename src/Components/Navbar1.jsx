import React from 'react';
import { Link } from 'react-router-dom';

const NavBar1 = () => {
  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: '500',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'color 0.3s ease',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const loginButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'white',
    color: '#222',
    marginRight: '10px',
  };

  const signupButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'red',
    color: 'white',
  };

  return (
    <nav
      style={{
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
      >
        {/* Logo/Title */}
        <h1
          style={{
            color: 'red',
            fontSize: '2rem',
          }}
        >
          Online Library
        </h1>

        {/* Navigation Links */}
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
            <Link
              to="/"
              style={navLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = 'red')}
              onMouseLeave={(e) => (e.target.style.color = 'white')}
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="about"
              style={navLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = 'red')}
              onMouseLeave={(e) => (e.target.style.color = 'white')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="login"
              style={navLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = 'red')}
              onMouseLeave={(e) => (e.target.style.color = 'white')}
            >
              books
            </a>
          </li>
          <li>
            <a
              href="contact"
              style={navLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = 'red')}
              onMouseLeave={(e) => (e.target.style.color = 'white')}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Buttons for Login and Sign Up */}
        <div>
          <button
            style={loginButtonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#eee')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = 'white')}
          >
            <Link to="/login" style={{ color: '#222', textDecoration: 'none' }}>
              Login
            </Link>
          </button>
          <button
            style={signupButtonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#cc0000')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = 'red')}
          >
            <Link to="/signup" style={{ color: 'white', textDecoration: 'none' }}>
              Sign Up
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar1;
