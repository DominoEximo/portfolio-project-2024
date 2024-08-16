import './App.scss';
import {Routes, Route, useLocation} from 'react-router-dom';
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

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    })
  });

  const location = useLocation();

  const renderParticlesJsInHomePage = location.pathname === "/";
  
  return (
    <div className="App">
      {/* particles js */}

      {renderParticlesJsInHomePage && (
        <Particles id="particles" options={particles}/>
      )}
      

      {/* navbar */}
      
      <Navbar className="navbar"/>
      
      {/* main page content */}

      <div className='App__main-page-content'>
        <Routes>

          <Route path='/' element={<Home/>}/>

          <Route path='/about' element={<About/>}/>

          <Route path='/resume' element={<Resume/>}/>

          <Route path='/skills' element={<Skills/>}/>

          <Route path='/portfolio' element={<Portfolio/>}/>

          <Route path='/contact' element={<Contact/>}/>


        </Routes>
      </div>

      
    </div>
    
  );
}

export default App;
