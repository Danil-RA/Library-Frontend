import './App.css';
import AdminLoginPage from './Components/AdminLoginPage';
import AdminDashboard from './Pages/AdminDashboard';
import Books from './Pages/Books';
import Home from './Pages/Home';
import Landing from './Pages/Landing';
import Singlepage from './Pages/Singlepage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ProfilePage from './Pages/ProfilePage';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AddBookPage from './Pages/add-books';
import SinglebookPage from './Pages/adminsinglepage';
import Users from './Pages/users';
import Bookreq from './Pages/Bookreq';
import AdminBooks from './Pages/adminbook';
import MembershipPage from './Components/MembershipPage';
import MembershipPlans from './Components/MembershipPlans';
import MembershipForm from './Components/MembershipForm';
import MembershipCard from './Components/MembershipCard';
import AdminRent from './Pages/AdminRent';
import AboutPage from './Pages/About';
import Contact from './Pages/Contact';
import AboutPage1 from './Pages/About1';
import Contact1 from './Pages/Contact1';
import Userhome from './Pages/Userhome';
import Allbooks from './Pages/Allbooks';
import Bookdetails from './Pages/Bookdetails';
import Expired from './Pages/Expired';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} >
            
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />


            <Route path="/userabout" element={<AboutPage1 />} />
            <Route path="/usercontact" element={<Contact1 />} />
            <Route path="/userhome" element={<Userhome />} />
            <Route path='/books' element={<Books />} />
            <Route path='/allbooks' element={<Allbooks />} />
            <Route path="/singlepage" element={<Singlepage />} />
            <Route path="/bookdetails" element={<Bookdetails />} />
            
          </Route>
          <Route index element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />


      <Route path="/Admin" element={isAuthenticated ? (<Navigate to="/Admindashboard" />) : (<AdminLoginPage onLogin={handleLogin} />)} />

<Route
  path="/Admindashboard"
  element={
    // isAuthenticated ? <AdminDashboard /> : <Navigate to="/Admindashboard"   />
    <AdminDashboard/>
  }
/>
        <Route path="/add-books" element={<AddBookPage/>} />
        <Route path="/adminbooks" element={<AdminBooks />} />
        <Route path="/singlebookpage" element={<SinglebookPage />} />
        <Route path="/users" element={<Users />} />
        <Route path='/bookrequest' element={<Bookreq/>}/>
        <Route path='/membership' element={<MembershipPage/>}/>
        <Route path='/plans' element={<MembershipPlans/>}/>
        <Route path='/membership-form' element={<MembershipForm/>}/>
        <Route path='/membership-card' element={<MembershipCard/>}/>
        <Route path='/AdminRent' element={<AdminRent/>}/>
        <Route path='/expired' element={<Expired/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
