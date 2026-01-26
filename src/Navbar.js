import React from 'react';

import { Link } from 'react-router-dom';
function Navbar() {
    return ( 

        <nav style={{width:"", height:"70px", display:"flex", justifyContent:"center", alignItems:"center",border:"2px solid #00f7ff",margin:"2px", borderRadius:"20px" }}>
            <h1 className="navbar-title" style={{fontSize:"20px"}}>Ashwini Gupta</h1>
            <div style={{display:"flex",  justifyContent:"space-evenly", alignItems:"center", width:"40%"}}>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/skills">Skills</Link>
                
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
     );
}

export default Navbar;