import React from 'react'

import {Link} from 'react-router-dom'

const Navbar = () =>{

    return(
        <ul>
            <li> <Link to="/"> Home</Link></li>
            <li> <Link to="/about"> About</Link></li>
            <li> <Link to="/help"> Help</Link></li>
            <li> <Link to="/parent"> Parent</Link></li>
        </ul>
    )

}

export default Navbar