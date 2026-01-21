


import React from 'react';
import './style/footer.css';

function Footer() {
    return ( 
        <div>

        <div className="footer">

            <div className='footer-item'>
                <h3>About Me</h3>
                <p>I am Ashwini Gupta, a passionate developer specializing in web development and design.</p>

                


            </div>



            <div className='footer-item'>
                <h3>Contact Me</h3>
                <p>Email: ashwinigupta9044@gmail.com</p>
                <p>Phone: +91 9580262921</p>

            </div>
        </div>
          <p style={{ display:"flex", justifyContent:"center"}}>copyright © 2023 Ashwini Gupta</p>
        </div>
     );
}

export default Footer;