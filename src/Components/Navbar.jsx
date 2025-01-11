import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: '500',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'color 0.3s ease',
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
              to="/userhome"
              style={navLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = 'red')}
              onMouseLeave={(e) => (e.target.style.color = 'white')}
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="userabout"
              style={navLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = 'red')}
              onMouseLeave={(e) => (e.target.style.color = 'white')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="allbooks"
              style={navLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = 'red')}
              onMouseLeave={(e) => (e.target.style.color = 'white')}
            >
              Allbooks
            </a>
          </li>
          <li>
            <a
              href="usercontact"
              style={navLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = 'red')}
              onMouseLeave={(e) => (e.target.style.color = 'white')}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Profile Link with Image */}
        <Link to="/profile">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/89deeb38-5b9a-467f-bc2e-e04d94687761/dftu93q-e38e8549-6915-48c6-ba6b-7f4912be4e2a.jpg/v1/fill/w_894,h_894,q_70,strp/red_hoodie_boy_with_smile___minecraft_by_stromplayz_dftu93q-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzg5ZGVlYjM4LTViOWEtNDY3Zi1iYzJlLWUwNGQ5NDY4Nzc2MVwvZGZ0dTkzcS1lMzhlODU0OS02OTE1LTQ4YzYtYmE2Yi03ZjQ5MTJiZTRlMmEuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.hlXQkFkEZk98Ldigq6tby1KI0hLOs8kvLjKM7cQ-Zrs"
            alt="Boy Logo"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '2px solid white',
              cursor: 'pointer',
            }}
          />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
