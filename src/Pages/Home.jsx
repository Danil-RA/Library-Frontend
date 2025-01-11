import React from 'react'


import '../styles/styles.css';


import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer';


function Home() {
    
  return (
    <div>
        <div className='bottom'>
            
            <Outlet/>
       
        </div>
        
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default Home