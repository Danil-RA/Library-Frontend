// src/components/MembershipCard.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function MembershipCard() {
    const location = useLocation();
    const { formData, plan } = location.state || { formData: {}, plan: 'No plan selected' };

    const styles = {
        page: {
            fontFamily: 'Arial, sans-serif',
            backgroundImage: 'url("https://media.istockphoto.com/id/1466057420/vector/80s-retro-futuristic-sci-fi-illustration-retrowave-video-game-landscape-with-neon-grids.jpg?s=612x612&w=0&k=20&c=qp7sWF94R7KzFqNXoJANSF408lkHKigeLnWkd1TDvk0=")',
            backgroundSize: 'cover',       // Ensures image covers entire screen
            backgroundRepeat: 'no-repeat', // Prevents repeating
            backgroundPosition: 'center',  // Centers the image
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        },
        card: {
            background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.5), rgba(0, 0, 0, 0.7))',
            borderRadius: '15px',
            padding: '20px',
            width: '450px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0px 4px 20px rgba(255, 0, 0, 0.6)',
            position: 'relative',
            overflow: 'hidden',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(255, 0, 0, 0.3)',
        },
        profileImage: {
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid rgba(255, 0, 0, 0.6)',
            boxShadow: '0px 0px 10px rgba(255, 0, 0, 0.7)',
        },
        details: {
            flex: '1',
            paddingLeft: '15px',
        },
        heading: {
            fontSize: '1.8rem',
            color: 'white',
            marginBottom: '10px',
            fontWeight: 'bold',
        },
        text: {
            fontSize: '1.1rem',
            margin: '5px 0',
        },
        membershipID: {
            fontSize: '1.3rem',
            color: 'cyan',
            fontWeight: 'bold',
            marginBottom: '5px',
        },
        qrCode: {
            width: '80px',
            height: '80px',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '5px',
            marginLeft: '10px',
            boxShadow: '0px 0px 10px rgba(255, 0, 0, 0.5)',
        },
    };

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                {/* Membership Details */}
                <div style={styles.details}>
                    <h3 style={styles.heading}>Membership Card</h3>
                    <p style={styles.membershipID}>_______________</p>
                    <p style={styles.text}><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                    <p style={styles.text}><strong>Email:</strong> {formData.email}</p>
                    <p style={styles.text}><strong>Phone:</strong> {formData.phoneNumber}</p>
                    <p style={styles.text}><strong>Plan:</strong> {plan}</p>
                    <p style={styles.text}><strong>Validity:</strong> 12 Months</p>
                </div>

                {/* Profile Icon & QR Code */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img 
                        src={formData.profileImage || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} 
                        alt="Profile" 
                        style={styles.profileImage} 
                    />
                    
                </div>
            </div>
        </div>
    );
}

export default MembershipCard;
