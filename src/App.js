import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './containers/home/index';
import About from './containers/about/index';
import Resume from './containers/resume/index';
import Skills from './containers/skills/index';
import Portfolio from './containers/portfolio/index';
import Contact from './containers/contact/index';
import Navbar from './components/navBar/index';

import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particles from './utils.js/particles';


function App() {

const handleInit = async (main) => {
    await loadSlim(main);
  
}
  // this should be run only once per application lifetime
  


  
  return (
    <div className="App">
      {/* particles js */}
      <Particles
        id="particles"
        init = {handleInit}
        options={particles}
      />

      {/* navbar */}
      <Navbar/>
      
      
      {/* main page content */}
      <Routes>

        <Route path='/' element={<Home/>}/>

        <Route path='/about' element={<About/>}/>

        <Route path='/resume' element={<Resume/>}/>

        <Route path='/skills' element={<Skills/>}/>

        <Route path='/portfolio' element={<Portfolio/>}/>

        <Route path='/contact' element={<Contact/>}/>


      </Routes>
    </div>
    
  );
}

export default App;
