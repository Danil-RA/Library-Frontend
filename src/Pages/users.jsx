import '../styles/styles.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../Components/AdminNavbar';

function Users() {
  const [users, setUsers] = useState([]); // State to store user data
  const [error, setError] = useState(null); // State for error messages


  useEffect(() => {
    // Fetch users from the backend when the component mounts
    axios.get('http://localhost:3001/users') // API endpoint
      .then((response) => {
        setUsers(response.data); // Set the users in state
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setError('Failed to fetch users. Please try again later.'); // Set error message
      });
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div style={pageStyle}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' ,color:'red',fontFamily:'monospace'}}>User Management</h1>

        {/* Display error message if present */}
        {error && <div style={errorStyle}>{error}</div>}

        <div style={tableContainerStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={tableHeader}>Name</th>
                <th style={tableHeader}>Place</th>
                <th style={tableHeader}>Age</th>
                <th style={tableHeader}>Email</th>
                <th style={tableHeader}>Password</th>
                <th style={tableHeader}>Education</th>
                <th style={tableHeader}>Contact</th>
                <th style={tableHeader}>Phone</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email} style={tableRow}>
                  <td style={tableCol}>{user.name}</td>
                  <td style={tableCol}>{user.place}</td>
                  <td style={tableCol}>{user.age}</td>
                  <td style={tableCol}>{user.email}</td>
                  <td style={tableCol}>{user.password}</td>
                  <td style={tableCol}>{user.education}</td>
                  <td style={tableCol}>{user.contact}</td>
                  <td style={tableCol}>{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Page styles
const pageStyle = {
  fontFamily: "monospace",
  background: "black",
  minHeight: "100vh",
  color: "#ECF0F1",
  padding: "20px",
};

const tableContainerStyle = {
  marginTop: "15px",
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  backgroundColor: "white",
  borderRadius: "15px",
  overflow: "hidden",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const tableHeader = {
  backgroundColor: "#333",
  color: "white",
  padding: "10px",
  textAlign: "center",
  fontSize: "20px",
  fontWeight: "bold",
};

const tableRow = {
  borderBottom: "1px solid #ddd",
};

const tableCol = {
  padding: "15px",
  textAlign: "center",
  color: "#333",
  fontSize: "15px",
};

const errorStyle = {
  color: "red",
  textAlign: "center",
  marginTop: "15px",
  fontWeight: "bold",
};

export default Users;
