import React from 'react';

import { Link } from 'react-router-dom';
function Navbar() {
    return ( 

        <nav style={{width:"", height:"70px", display:"flex", justifyContent:"center", alignItems:"center",border:"2px solid black",margin:"20px", borderRadius:"20px" }}>
            <h1 >Ashwini Gupta</h1>
            <div style={{display:"flex",  justifyContent:"space-evenly", alignItems:"center", width:"50%"}}>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/about">About Me</Link>
                <Link to="/contact">Contact Me</Link>
            </div>
        </nav>
     );
}

export default Navbar;