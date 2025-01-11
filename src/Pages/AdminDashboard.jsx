import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "../Components/AdminNavbar";


const AdminDashboard = () => {




  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch books from the backend when the component mounts
    axios.get('http://localhost:3001/Admindashboard')  // API endpoint
      .then((response) => {
        setRequests(response.data);  // Set the books in state
      })
      .catch((error) => {
        console.error('Error fetching requests:', error);
      });
  }, []);

  //=====================================

  const [errorMessage, setErrorMessage] = useState("")
  const [clickedTime, setClickedTime] = useState('');
  const [ExpiryTime, setExpiryTime] = useState('');
  console.log(clickedTime)
  console.log(ExpiryTime)
  const handleAccept = (request) => {
    // e.preventDefault();
    console.log('Book clicked:', request); // Log book details

    const now = new Date();

    const currentTime = now.toLocaleTimeString(); // Get the current time in HH:MM:SS format
    setClickedTime(currentTime);

    now.setMinutes(now.getMinutes() + 1);
    const LastTime = now.toLocaleTimeString(); // Format the updated time
    setExpiryTime(LastTime);

    
    
    
  // Make both API calls concurrently using Promise.all
  Promise.all([
    axios.put('http://localhost:3001/books', { title: request.title , name:request.name}),  // Update rental status
    // axios.delete('http://localhost:3001/Admindashboard', { data: { title: request.title } }) , // Delete request
    axios.put('http://localhost:3001/bookrequest',  {_id:request._id  } ) , // Update status
    axios.put('http://localhost:3001/time',{ _id:request._id ,ExpiryTime:LastTime })  // Update status
  ])
    .then(([putResult,putStatus]) => {
      console.log('PUT result:', putResult);
      // console.log('DELETE result:', deleteResult);
      console.log('PUT result:', putStatus);
   

      // Reload the page only after both operations succeed
      window.location.reload();
    })
    .catch((err) => {
      if (err.response && err.response.status === 400) {
        setErrorMessage("Something Went Wrong.");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
      console.error(err);
    });
};
   


const handleDecline = (request) => {
  axios.put('http://localhost:3001/decline',  { title: request.title , _id:request._id } ) 
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        if (err.response && err.response.status === 400) {
          setErrorMessage("Something Went Wrong.");
        }
        else {
          setErrorMessage("An error occurred. Please try again.");
        }
        console.error(err)
      })
      window.location.reload();
}
  //=====================================

  return (
    <div>
      <AdminNavbar />
    <div style={pageStyle}>
      <h1 style={{textAlign:'center'}}>Book Requests</h1>
      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={tableHeader}>Book Name</th>
              <th style={tableHeader}>User Name</th>
              <th style={tableHeader}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              request.status === "Pending" && (
              <tr key={request.name} style={tableRow}>
                <td style={tableCol}>{request.title}</td>
                <td style={tableCol}>{request.name}</td>
                <td style={tableCol}>
                  <button onClick={() => handleAccept(request)} style={acceptButton}> ✔ </button>
                  <button onClick={() => handleDecline(request)} style={declineButton}> X </button>
                </td>
              </tr>
              )
            ))}
          </tbody>
        </table>
        {errorMessage && <p style={errorStyle}>{errorMessage}</p>}
      </div>
    </div>
    </div>
    
  );
};

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
  width: "80%",
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

const acceptButton = {
  backgroundColor: "green",
  color: "#fff",
  border: "none",
  marginTop: "5px",
  padding: "0.46rem 1rem",
  borderRadius: "20px",
  cursor: "pointer",
  fontWeight: "bold",
  marginRight: "8px",
};


const declineButton = {
  backgroundColor: "red",
  color: "#fff",
  border: "none",
  padding: "0.55rem 1rem",
  borderRadius: "20px",
  cursor: "pointer",
  fontWeight: "bold",
  marginRight: "8px",
};

const errorStyle = {
  color: "red",
  textAlign: "center",
  marginTop: "15px",
  fontWeight: "bold",
};

export default AdminDashboard;
