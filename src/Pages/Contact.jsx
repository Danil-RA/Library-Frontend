import React from 'react';
import NavBar1 from '../Components/Navbar1';

const Contact = () => {
  const styles = {
    aboutPage: {
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      textAlign: 'center',
      backgroundColor: '#101010', // Dark background for the entire page
      margin: 0,
      padding: 0,
    },
    banner: {
      backgroundImage:
        'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://img.freepik.com/free-vector/red-light-lines-black-background_107791-30338.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      padding: '60px 20px',
      textAlign: 'center',
    },
    bannerText: {
      fontSize: '2.8rem',
      fontWeight: 'bold',
      letterSpacing: '1px',
      margin: '10px 0',
    },
    bannerImage: {
      width: '120px',
      borderRadius: '50%',
      marginTop: '20px',
      opacity: 0.8, // Semi-transparent image
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', // Subtle glowing effect
    },
    contactSection: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '40px',
      padding: '50px 20px',
      background: '#1a1a1a',
    },
    contactInfo: {
      flex: '1',
      maxWidth: '400px',
      minWidth: '300px',
      color: 'white',
      textAlign: 'left',
      padding: '20px',
      backgroundColor: '#292828',
      borderRadius: '10px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
    },
    pitchForm: {
      flex: '1',
      maxWidth: '400px', // Restricts maximum width to avoid stretching
      minWidth: '300px',
      padding: '20px',
      backgroundColor: '#292828',
      borderRadius: '10px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Centers content horizontally
    },
    sectionHeading: {
      fontSize: '1.8rem',
      marginBottom: '20px',
      color: '#ff4b2b',
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px', // Slightly increased gap for better spacing
      padding: '10px', // Adds padding to the form content
      boxSizing: 'border-box', // Ensures padding is included in the width
      width: '100%', // Makes the form fill its parent container
    },
    textArea: {
      width: '100%',
      padding: '15px',
      border: 'none',
      borderRadius: '8px',
      backgroundColor: '#1a1a1a',
      color: 'white',
    },
    sendButton: {
      background: '#ff4b2b',
      color: 'white',
      border: 'none',
      padding: '12px',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background 0.3s',
      fontSize: '1rem',
    },
    sendButtonHover: {
      background: '#d14027',
    },
    mapSection: {
      marginTop: '50px',
      padding: '20px',
      backgroundColor: '#101010',
    },
  };

  return (
    <div>
        <NavBar1/>
    <div style={styles.aboutPage}>
      {/* Banner Section */}
      <div style={styles.banner}>
        <h1 style={styles.bannerText}>Let's Connect</h1>
        <img
          src="https://cdn-icons-png.flaticon.com/256/9968/9968669.png"
          alt="Library Illustration"
          style={{
            opacity: "0.01",
            ...styles.bannerImage,
          }}
        />
      </div>

      {/* Contact and Info Section */}
      <div style={styles.contactSection}>
        <div style={styles.contactInfo}>
          <h2 style={styles.sectionHeading}>Meet Us</h2>
          <p>📞 +1 123 456 7890</p>
          <p>📧 contact@onlinelibrary.com</p>
          <p>📍 123 Library St, Booktown</p>
        </div>
        <div style={styles.pitchForm}>
          <h2 style={styles.sectionHeading}>Pitch Us</h2>
          <form style={styles.form}>
            <textarea
              placeholder="Type your message here..."
              rows="5"
              style={styles.textArea}
            ></textarea>
            <button
              type="submit"
              style={styles.sendButton}
              onMouseOver={(e) =>
                (e.target.style.background = styles.sendButtonHover.background)
              }
              onMouseOut={(e) =>
                (e.target.style.background = styles.sendButton.background)
              }
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div style={styles.mapSection}>
        <iframe
          title="Thiruvananthapuram Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218016.12544576876!2d76.75935062918087!3d8.50003789187341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb805bbcd47%3A0x15439fab5c5c81cb!2sThiruvananthapuram%2C%20Kerala!5e1!3m2!1sen!2sin!4v1735743694689!5m2!1sen!2sin"
          style={{
            border: 0,
            width: '100%',
            height: '450px',
            borderRadius: '10px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    </div>
  );
};

export default Contact;
