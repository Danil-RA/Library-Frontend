import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../Components/Navbar";

const ProfilePage = () => {
  const navigate = useNavigate();

  const defaultUserDetails = {
    name: "abc",
    email: "",
    age: "",
    education: "",
    contact: "",
    place: "Trivandrum",
    mobile: "1234567890",
    NoOfBooks: 5,
  };

  const [userDetails, setUserDetails] = useState(defaultUserDetails);
  const [editable, setEditable] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("1 month ago");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (storedUserDetails) {
      setUserDetails(storedUserDetails);
    }
  }, []);

  useEffect(() => {
    if (userDetails?.email) {
      axios
        .get(`http://localhost:3001/profile?emailID=${userDetails.email}`)
        .then((response) => {
          setCount(response.data);
        })
        .catch((error) => {
          console.error("Error fetching books:", error);
        });
    }
  }, [userDetails.email]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEditable(false);
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3001/profile", {
        email: userDetails.email,
        age: userDetails.age,
        education: userDetails.education,
        contact: userDetails.contact,
      });

      if (response.status === 200) {
        alert("Profile updated successfully!");
        setUserDetails(response.data.user);
      } else {
        alert(response.data.message || "Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred while updating the profile.");
    } finally {
      setLoading(false);
    }

    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
    setLastUpdated(formattedDate);
  };

  const handleLogout = () => {
    localStorage.clear();
    alert("Logged out successfully!");
    navigate("/");
  };

  const avatarImage =
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/89deeb38-5b9a-467f-bc2e-e04d94687761/dftu93q-e38e8549-6915-48c6-ba6b-7f4912be4e2a.jpg/v1/fill/w_894,h_894,q_70,strp/red_hoodie_boy_with_smile___minecraft_by_stromplayz_dftu93q-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzg5ZGVlYjM4LTViOWEtNDY3Zi1iYzJlLWUwNGQ5NDY4Nzc2MVwvZGZ0dTkzcS1lMzhlODU0OS02OTE1LTQ4YzYtYmE2Yi03ZjQ5MTJiZTRlMmEuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.hlXQkFkEZk98Ldigq6tby1KI0hLOs8kvLjKM7cQ-Zrs";

  return (
    <div>
      <NavBar/>
    <div
      className="profile-container"
      style={{
        fontFamily: "monospace",
        color: "white",
        backgroundColor: "black",
        padding: "2rem",
        borderRadius: "10px",
        maxWidth: "600px",
        margin: "2rem auto",
        boxShadow: "0 4px 8px rgba(255, 0, 0, 0.2)",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          fontWeight: "bold",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "1.5rem",
        }}
      >
        ← Back
      </button>

      <div style={{ textAlign: "center" }}>
        <img
          src={avatarImage}
          alt="Profile"
          style={{
            borderRadius: "50%",
            width: "120px",
            height: "120px",
            marginBottom: "1rem",
            border: "3px solid white",
          }}
        />
        <h2 style={{ margin: "0", fontSize: "1.8rem" }}>{userDetails.name}</h2>
        <p style={{ color: "grey", fontSize: "1rem" }}>{userDetails.email}</p>
        <button
          onClick={() => setEditable(!editable)}
          style={{
            marginTop: "1.5rem",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            fontWeight: "bold",
            backgroundColor: editable ? "grey" : "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {editable ? "Cancel" : "Edit"}
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          borderRadius: "8px",
          backgroundColor: "#222",
          color: "white",
        }}
      >
        <div>
          <label style={{ fontWeight: "bold" }}>Age</label>
          <input
            type="number"
            name="age"
            value={userDetails.age}
            onChange={handleInputChange}
            disabled={!editable}
            style={{
              width: "100%",
              padding: "0.4rem",
              marginBottom: "1.2rem",
              border: "1px solid grey",
              borderRadius: "5px",
              backgroundColor: "black",
              color: "white",
            }}
          />
        </div>

        <div>
          <label style={{ fontWeight: "bold" }}>Education</label>
          <input
            type="text"
            name="education"
            value={userDetails.education}
            onChange={handleInputChange}
            disabled={!editable}
            style={{
              width: "100%",
              padding: "0.4rem",
              marginBottom: "1.2rem",
              border: "1px solid grey",
              borderRadius: "5px",
              backgroundColor: "black",
              color: "white",
            }}
          />
        </div>

        <div>
          <label style={{ fontWeight: "bold" }}>Contact Details</label>
          <input
            type="text"
            name="contact"
            value={userDetails.contact}
            onChange={handleInputChange}
            disabled={!editable}
            style={{
              width: "100%",
              padding: "0.4rem",
              marginBottom: "1.2rem",
              border: "1px solid grey",
              borderRadius: "5px",
              backgroundColor: "black",
              color: "white",
            }}
          />
        </div>

        <div>
          <label style={{ fontWeight: "bold" }}>Place</label>
          <p style={{ backgroundColor: "#555", padding: "0.6rem" ,borderRadius:'10px',marginBottom:'15px'}}>
            {userDetails.place}
          </p>
        </div>

        <div>
          <label style={{ fontWeight: "bold" }}>Number of Books Rented</label>
          <p>{count}</p>
        </div>

        <small style={{ color: "grey" }}>Last updated: {lastUpdated}</small>

        {editable && (
          <button
            type="submit"
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginLeft:'10px',
            }}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        )}
      </form>

      <button
        onClick={handleLogout}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          backgroundColor: "black",
          color: "red",
          border: "2px solid red",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
    </div>
  );
};

export default ProfilePage;
