import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroSection from './HeroSection'
import About from './About';
import Services from './Services';
import TechIcons from './TechIcons';
import WorkCategory from './WorkCategory';
import WeWork from './WeWork';
function App() {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Services/>
      <TechIcons/>
      <WorkCategory/>
      <WeWork/>
    </div>
  )
}

export default App
