import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './containers/home/index';
import About from './containers/about/index';
import Resume from './containers/resume/index';
import Skills from './containers/skills/index';
import Portfolio from './containers/portfolio/index';
import Contact from './containers/contact/index';
import Navbar from './components/navBar/index';


function App() {
  return (
    <div className="App">
      {/* particles js */}

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
