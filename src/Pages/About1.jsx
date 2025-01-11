import React from 'react';
import NavBar from '../Components/Navbar';

const AboutPage1 = () => {
  return (
    <div>
        <NavBar/>
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        backgroundColor: '#101010',
      }}
    >
      {/* Header Section */}
      <div
        style={{
          backgroundColor: 'linear-gradient(to right, #ff4b2b, #ff416c)',
          padding: '80px 20px',
          textAlign: 'center',
          borderBottom: '3px solid #ff4b2b',
        }}
      >
        <h1
          style={{
            color: '#fff',
            fontSize: '3rem',
            letterSpacing: '2px',
            margin: 0,
          }}
        >
          About Us
        </h1>
      </div>

      {/* Content Section */}
      <div
        style={{
          maxWidth: '900px',
          margin: '50px auto',
          backgroundColor: '#1a1a1a',
          color: 'white',
          padding: '30px',
          boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
          borderRadius: '12px',
          textAlign: 'justify',
        }}
      >
        {/* Image */}
        <img
          src="https://www.teachhub.com/wp-content/uploads/2020/09/Sept-9-Benefits-of-Group-Work_web.jpg"
          alt="About us"
          style={{
            width: '100%',
            borderRadius: '12px',
            marginBottom: '25px',
            opacity: 0.9,
          }}
        />

        {/* First Paragraph */}
        <p
          style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: '#f0f0f0',
            marginBottom: '20px',
            textIndent: '2rem',
          }}
        >
          Welcome to our Bookstore Library web application, a one-stop platform
          for all your reading needs! Whether you're a casual reader or a
          passionate book lover, our app is designed to provide a seamless and
          intuitive experience. With our user-friendly login and signup
          features, you can quickly create an account to access a world of
          books. Once logged in, explore our extensive collection of books
          across various genres and categories, carefully curated to suit
          diverse tastes and preferences.
        </p>

        {/* Second Paragraph */}
        <p
          style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: '#f0f0f0',
            textIndent: '2rem',
          }}
        >
          Our web app also allows you to view the availability of books in
          real-time. Found a book you love? You can conveniently rent it online
          if it's available, eliminating the hassle of physical visits. Our
          streamlined rental system ensures a smooth process, from browsing to
          checkout. With features like detailed book descriptions and the
          ability to manage your rentals easily, our platform is here to make
          your reading journey enjoyable and hassle-free. Explore, rent, and
          indulge in the joy of reading—all from the comfort of your home!
        </p>
      </div>

      {/* Footer Section */}
      <div
        style={{
          textAlign: 'center',
          padding: '20px',
          color: '#ccc',
          fontSize: '0.9rem',
          borderTop: '1px solid #333',
          marginTop: '30px',
        }}
      >
        
      </div>
    </div>
    </div>
  );
};

export default AboutPage1;
