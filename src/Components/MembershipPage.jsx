import React from 'react';
import { useNavigate } from 'react-router-dom';

function MembershipPage() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/plans');
    };

    const styles = {
        membershipPage: {
            fontFamily: 'Arial, sans-serif',
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'center',
            padding: '50px 20px',
        },
        heading: {
            fontSize: '2.5rem',
            color: 'red',
            marginBottom: '20px',
        },
        description: {
            fontSize: '1.2rem',
            lineHeight: '1.8',
            maxWidth: '800px',
            margin: '0 auto 30px auto',
        },
        membershipOptions: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px',
            marginTop: '30px',
        },
        membershipOption: {
            backgroundColor: '#292828',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 8px rgba(255, 0, 0, 0.2)',
            maxWidth: '400px',
            minWidth: '300px',
            textAlign: 'left',
        },
        subHeading: {
            color: 'red',
            fontSize: '1.5rem',
            marginBottom: '10px',
        },
        list: {
            listStyleType: 'none',
            padding: 0,
            fontSize: '1.1rem',
            lineHeight: '1.6',
        },
        membershipAdvantages: {
            backgroundColor: '#1a1a1a',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 8px rgba(255, 0, 0, 0.3)',
            maxWidth: '800px',
            margin: '40px auto',
        },
        button: {
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            padding: '15px 25px',
            fontSize: '1.2rem',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background 0.3s ease-in-out',
            marginTop: '20px',
        },
        buttonHover: {
            backgroundColor: '#d40000',
        }
    };

    return (
        <div style={styles.membershipPage}>
            <h2 style={styles.heading}>Membership</h2>
            <p style={styles.description}>
                Today, children are getting vast exposure to knowledge through computers, the internet, and smartphones... but reading should not be neglected since every media has its own role to play. Reading cannot be substituted; the child’s most important introduction to learning is through reading. Reading helps to develop thinking, imagination, and analytical skills in children. Reading good books provides an unparalleled command over language & helps to develop better concentration too.
            </p>
            <p style={styles.description}>
                To inculcate reading habits in a child, we need to provide a variety of books that match all their interests. That’s why we provide multiple books with unlimited exchanges to cater to all your interests.
            </p>
            <p style={styles.description}>We provide two kinds of memberships:</p>
            
            <div style={styles.membershipOptions}>
                <div style={styles.membershipOption}>
                    <h3 style={styles.subHeading}>Home Delivery Membership</h3>
                    <ul style={styles.list}>
                        <li>📚 The library staff will visit your place twice a month based on assigned days for your area.</li>
                        <li>🏛️ Between our two visits, you can visit the library for additional exchanges.</li>
                    </ul>
                </div>
                <div style={styles.membershipOption}>
                    <h3 style={styles.subHeading}>Regular Visiting Membership</h3>
                    <ul style={styles.list}>
                        <li>🔄 Members can visit the library as often as they like to exchange books.</li>
                    </ul>
                </div>
            </div>

            <div style={styles.membershipAdvantages}>
                <h3 style={styles.subHeading}>Membership Advantages</h3>
                <ul style={styles.list}>
                    <li>📖 Access to a vast range of books including fiction, non-fiction, self-improvement, literary classics, etc.</li>
                    <li>📚 A huge collection of books useful for school projects and academic growth.</li>
                    <li>🔖 You can request specific books beforehand, which will be reserved for you.</li>
                    <li>💰 Special discounts on purchasing books from our “Books For Sale” section.</li>
                </ul>
            </div>

            <button
                style={styles.button}
                onMouseOver={(e) => (e.target.style.background = styles.buttonHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.background = styles.button.backgroundColor)}
                onClick={handleButtonClick}
            >
                Become a Member
            </button>
        </div>
    );
}

export default MembershipPage;
