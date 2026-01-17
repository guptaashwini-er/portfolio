

import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Project from './component/project/Project';
import Skill from './component/skills/Skills';
import HomePage from './HomePage';


 function Main() {
    return ( 

 
        

        <Routes>
            <Route path="/" element={<HomePage/>} />
           
            <Route path="/projects" element={<Project/>} />
            <Route path="/skills" element={<Skill/>} />

            <Route path="*" element={<h1>Page Not Found 404</h1>} />

           

        </Routes>
        
        
        

        
  
     );
}

export default Main;