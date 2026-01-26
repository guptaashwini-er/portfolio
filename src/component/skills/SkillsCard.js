
import React from 'react';
import './skill.css';
function SkillsCard({title, description, image, link,text}) {
    return (
        <div className='skills-card-container'>
            
        <div className="project-card" style={{border:"1px solid blue"}}>
            <div style={{display:"flex",}}>
            <img src={image} alt={title} className="skills-image"/>
            <p style={{fontSize:"15px",fontWeight:"bold"}}>{text}</p>

            </div>
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            {link && <a href={link} className="project-link" target="_blank" rel="noopener noreferrer" style={{color:"#fff",background:"blue",alignItems:"center"}}>Apply Now</a>}
        </div>
       
        </div>
    );
}

export default SkillsCard;