

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Project from './component/project/Project';
import Skills from './component/skills/Skills';


 function Main() {
    return ( 

   <>
        <BrowserRouter>

        <Routes>
           
            <Route path="/projects" element={<Project/>} />
            <Route path="/skills" element={<Skills/>} />

           

        </Routes>
        
        
        </BrowserRouter>
        </>
     );
}

export default Main;