import React from 'react';
import './skill.css';
import SkillsData from './SkillsData';
import SkillsCard from './SkillsCard';


function Skills() {
    return ( 

           <div className="project-container" style={{display:"flex", justifyContent:"center" , alignItems:"center", flexDirection:"column",}}>
            <h1 style={{fontSize:"50px"}}>Skills</h1>

            
            <div className="project-list1" style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap", gap:"5px"}}>
                {SkillsData.map(project => (
                    <SkillsCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        text={project.text}
                        link={project.link}
                    />
                ))}
            </div>
            
        </div>
     );
}

export default Skills;