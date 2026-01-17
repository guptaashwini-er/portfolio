import React from 'react';

function Hero() {
    return ( 



        <div style={{display:"flex", justifyContent:"center", height:"600px", border:"2px solid black", margin:"20px", borderRadius:"20px"}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"80%"}}>
            <div>
            <h1>Welcome to My Portfolio</h1>
            <p>Hi, I'm Ashwini Gupta, -a Frontend developer.</p>
            <p>who builds responsive and user-friendly websites.</p>
            <p>I specialize in creating modern web applications with a focus on user experience.</p>
            <button style={{padding:"10px 20px", fontSize:"16px", cursor:"pointer", borderRadius:"5px", border:"none", backgroundColor:"black", color:"white"}}>Get in Touch</button>
            </div>



            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"20px"}}>
                <div style={{width:"450px" ,objectFit:"cover", height:"450px", borderRadius:"50%", overflow:"hidden", display:"flex", justifyContent:"center", alignItems:"center", border:"2px solid black"}}>
                <img src="image\profile.jpg" alt="Ashwini Gupta" style={{width:"100%", height:"100%", objectFit:"cover"}} />
                </div>
                <div style={{fontSize:"20px", fontWeight:"bold"}}>Developer</div>
            </div>
        </div>

        </div>
     );
}

export default Hero;