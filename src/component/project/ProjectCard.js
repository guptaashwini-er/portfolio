import React from 'react';
import './project.css';

function ProjectCard({title, description, image, link}) {
    return (
        <div className='project-card-container'>
            
        <div className="project-card">
            <img src={image} alt={title} className="project-image"/>
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            {link && <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>}
        </div>
       
        </div>
    );
}

export default ProjectCard;