import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Project from './component/project/Project';
import Hero from './component/home/Hero';

function App() {
  return (
   <>
   <Navbar/> 

   <Hero/>
   <Project/>
   </>
  );
}

export default App;
