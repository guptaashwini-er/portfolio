import React from 'react';
import { useState,useRef, useEffect } from 'react';
import './hero.css';

const words = [
  "Frontend Developer",
  "UI / UX Designer",
  "React JS Developer",
  "Creative Web Engineer"
];

function Hero() {
  const [text, setText] = useState("");
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 60;
    const delayAfterWord = 1200;

    const interval = setInterval(() => {
      const currentWord = words[wordIndex.current];

      if (!isDeleting.current) {
        // typing
        setText(currentWord.substring(0, charIndex.current + 1));
        charIndex.current++;

        if (charIndex.current === currentWord.length) {
          setTimeout(() => {
            isDeleting.current = true;
          }, delayAfterWord);
        }
      } else {
        // deleting
        setText(currentWord.substring(0, charIndex.current - 1));
        charIndex.current--;

        if (charIndex.current === 0) {
          isDeleting.current = false;
          wordIndex.current = (wordIndex.current + 1) % words.length;
        }
      }
    }, isDeleting.current ? deleteSpeed : typeSpeed);

    return () => clearInterval(interval);
  }, []);
    return ( 



        <div className='hero-bg' style={{display:"flex", justifyContent:"center",  border:"2px solid #00f7ff", margin:"20px", borderRadius:"20px"}}>
        <div  className='hero-container' style={{display:"flex", justifyContent:"", alignItems:"center", width:"80%"}}>
            <div>
            <h1 style={{fontSize:"50px"}}>Welcome to My Portfolio <h1 className='typing'>{text}</h1> </h1>
            
            <p>Hi, I'm Ashwini Gupta, -a Frontend developer.</p>
            <p>who builds responsive and user-friendly websites.</p>
            <p>I specialize in creating modern web applications with a focus on user experience.</p>
            <button style={{padding:"10px 20px", fontSize:"16px", cursor:"pointer", borderRadius:"5px", border:"none", backgroundColor:"black", color:"white"}}>Get in Touch</button>
            </div>



            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"20px"}}>
                <div className='profile-img' >
                <img src="image\profile.jpg" alt="Ashwini Gupta" style={{width:"100%", height:"100%", objectFit:"cover"}} />
                </div>
                <div style={{fontSize:"50px", fontWeight:"bold", display:"flex", justifyContent:"center", alignItems:"center"}}>Developer</div>
            </div>
        </div>

        </div>
     );
}

export default Hero;