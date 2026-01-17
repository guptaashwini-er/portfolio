import React from 'react';
import './project.css';
import projectData from './ProjectData';
import ProjectCard from './ProjectCard';


function Project() {
   
    return (
        <div className="project-container" style={{display:"flex", justifyContent:"center" , alignItems:"center", flexDirection:"column",}}>
            <h2>My Projects</h2>
            
            <div className="project-list">
                {projectData.map(project => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </div>
            
        </div>
    )
}

export default Project;