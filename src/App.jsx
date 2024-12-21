import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Qualifications from './Components/Qualifications/Qualifications'
import Projects from './Components/Projects/Projects'
import Roles from './Components/Roles/Roles'
import Certifications from './Components/Certifications/Certifications'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Qualifications />
      <Projects />
      <Roles />
      <Certifications />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App