import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Project from './component/project/Project';
import Hero from './component/home/Hero';
import Main from './route';
import Footer from './Footer';

function App() {
  return (
   <>
   <Navbar/>
   <Main/>
   <Footer/>
   </>
  );
}

export default App;
