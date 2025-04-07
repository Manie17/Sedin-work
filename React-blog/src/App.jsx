import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Together from './components/Together'
import Industry from './components/Industry'
import Stats from './components/Stats'
import Hire from './components/Hire'
import Footer from './components/Footer'
import Team from './components/Team'
import Fullimg from './components/Fullimg'
import ProcessSteps from './components/Together'



const App = () => {
  return (
   <div>
    <Navbar />
    < Hero/>
    <Fullimg />
    <Together/>
    <ProcessSteps/>
    <Industry/>
    <Stats/>
    <Team/>
    <Hire/>
    <Footer/>
    </div> 
  )
}

export default App