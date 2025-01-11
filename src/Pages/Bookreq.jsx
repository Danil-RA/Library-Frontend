import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import NavBar from "../Components/Navbar";

function Bookreq() {

  const navigate = useNavigate();
  const [ErrorMessage, setErrorMessage] = useState("")


  useEffect(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (storedUserDetails) {
      setUserDetails(storedUserDetails);
    }
  }, []);


  const handleClose = (close) => {
    axios.delete('http://localhost:3001/bookrequest', { data: { _id: close._id } })
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
    console.log(ErrorMessage)
  }
  const [display, setDisplay] = useState([]);
  const [userDetails, setUserDetails] = useState({ email: '' }); // Assuming you have a way to set user details

  useEffect(() => {
    if (userDetails.email) {  // Ensure email is available before making the request
      axios
        .get(`http://localhost:3001/bookrequest?emailID=${userDetails.email}`)
        .then((response) => {
          console.log('Fetched data:', response.data);
          setDisplay(response.data);  // Set the books in state
        })
        .catch((error) => {
          console.error('Error fetching requests:', error);
        });
    }
  }, [userDetails.email]);

  const goBack = () => {
    console.log('Back clicked'); // Log book details
    navigate('/books');
  };
  return (
    <div>
      {/* {display.map((request, index) => (
      <div key={index}>
        <button>Title: {request.title}</button>
        <button>Status: {request.status}</button>
      </div>
    ))} */}





      <NavBar />
      <div style={pageStyle}>
        <div style={tableContainerStyle}>
          <table style={tableStyle}>
            <thead>

              <tr>
                <th style={tableHeader}>Book Name</th>
                <th style={tableHeader}>Status</th>
                <th style={tableHeader}>Close</th>

              </tr>
            </thead>
            <tbody>


              {display.map((request, index) => (
                <tr key={display._id} style={tableRow}>
                  <td style={tableCol}>{request.title}</td>
                  {/* <td style={tableCol}>{request.status}</td> */}
                  <td
                    style={{
                      ...tableCol, // Preserves existing styles from tableCol
                      color: request.status === "Accepted" ? "green" : request.status === "Declined" ? "red" : "black",
                    }}
                  >
                    {request.status}
                  </td>

                  <td style={tableCol}><button style={closebut} onClick={() => handleClose(request)}>x</button></td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
        <button
          onClick={goBack}
          style={{
            backgroundColor: 'red',
            color: 'black',
            fontSize: '18px',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            textTransform: 'uppercase',
            transition: 'all 0.3s ease',
            marginLeft: '1010px',
            marginTop: '50px',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = 'white') || (e.target.style.color = 'red')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'red') || (e.target.style.color = 'white')}
        >
          Back
        </button>
      </div>

    </div>
  )
}

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

const closebut = {
  backgroundColor: "black",
  color: "#fff",
  border: "none",
  padding: "0.4rem 0.8rem",
  borderRadius: "40px",
  fontWeight: "bold",
  marginRight: "8px",
  // backgroundColor: 'red',
  // color: 'black'


};

/*
const declineButton = {
  backgroundColor: "red",
  color: "#fff",
  border: "none",
  padding: "0.5rem 1rem",
  borderRadius: "20px",
  cursor: "pointer",
  fontWeight: "bold",
};
*/
// {display.map((request, index) => (
//   <div key={index}>
//     <td>Title: {request.title}</td>
//     <td>Status: {request.status}</td>
//   </div>
// ))}

export default Bookreq