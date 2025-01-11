import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#222',
        padding: '4rem 2rem',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'monospace, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto',
          paddingBottom: '2rem',
          borderBottom: '1px solid red',
        }}
      >
        <div style={{ flex: '1', minWidth: '250px', marginBottom: '1.5rem' }}>
          <h2 style={{ color: 'red', marginBottom: '1rem' }}>About Us</h2>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
            Online Library is your one-stop platform for accessing a wide variety of books, journals, and
            resources anytime, anywhere. We are committed to fostering learning and knowledge-sharing.
          </p>
        </div>
        <div style={{ flex: '1', minWidth: '250px', marginBottom: '1.5rem' }}>
          <h2 style={{ color: 'red', marginBottom: '1rem' }}>Quick Links</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <a
                href="/"
                style={{ color: 'white', textDecoration: 'none', marginBottom: '0.5rem', display: 'block' }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                style={{ color: 'white', textDecoration: 'none', marginBottom: '0.5rem', display: 'block' }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                style={{ color: 'white', textDecoration: 'none', marginBottom: '0.5rem', display: 'block' }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                style={{ color: 'white', textDecoration: 'none', marginBottom: '0.5rem', display: 'block' }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div style={{ flex: '1', minWidth: '250px', marginBottom: '1.5rem' }}>
          <h2 style={{ color: 'red', marginBottom: '1rem' }}>Contact Us</h2>
          <p style={{ marginBottom: '0.5rem' }}>Email: support@onlinelibrary.com</p>
          <p style={{ marginBottom: '0.5rem' }}>Phone: +1 234 567 890</p>
          <p>Address: 123 Library Lane, Knowledge City</p>
        </div>
        <div
        style={{
          marginTop: "20px",
          textAlign: "center",
          padding: "1rem",
          backgroundColor: "#DDE9F2",
          borderRadius: "12px",
          width: "450px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        <p style={{ color: "#1E2A41", marginBottom: "0.5rem" }}>
          Don't have a membership card?
        </p>
        <Link
          to="/membership"
          style={{
            textDecoration: "none",
            color: "#3A5A75",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Apply for a Membership Card
        </Link>
      </div>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: 'red', marginBottom: '1rem' }}>Follow Us</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', fontSize: '1.5rem', textDecoration: 'none' }}
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', fontSize: '1.5rem', textDecoration: 'none' }}
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', fontSize: '1.5rem', textDecoration: 'none' }}
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', fontSize: '1.5rem', textDecoration: 'none' }}
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <p style={{ fontSize: '0.9rem', color: '#aaa' }}>
          &copy; 2024 Online Library. All rights reserved. | Privacy Policy | Terms of Service
        </p>
      </div>
    </footer>
  );
};

export default Footer;
