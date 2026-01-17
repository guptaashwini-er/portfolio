import React from 'react';
function Navbar() {
    return ( 

        <nav style={{width:"", height:"70px", display:"flex", justifyContent:"center", alignItems:"center",border:"2px solid black",margin:"20px", borderRadius:"20px" }}>
            <h1 >Ashwini Gupta</h1>
            <div style={{display:"flex",  justifyContent:"space-evenly", alignItems:"center", width:"50%"}}>
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
                <a href="/skills">Skills</a>
                <a href="/about">About Me</a>
                <a href="/contact">Contact Me</a>
            </div>
        </nav>
     );
}

export default Navbar;