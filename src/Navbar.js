import React from 'react'

import {Link} from 'react-router-dom'

import './Navbar.css'

const Navbar = () =>{

    return(
    <>
    <div className="nav-box"> 
        <a className="ama-tag"> AMA</a>
        <div className="the-links">
        <Link className="nav-link" to="/"> HOME</Link>
        <Link className="nav-link" to="/about"> ABOUT</Link>
        <Link className="nav-link" to="/help"> HELP</Link>
        <Link className="nav-link" to=""> Log Out</Link>
        </div>
    </div>  
   </>
    )

}

export default Navbar