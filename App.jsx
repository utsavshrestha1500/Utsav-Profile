import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Testimonials from './components/testimonials/Testimonials'
import Portfolio from './components/portfolio/Portfolio'
import './index.css'

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Portfolio />
    <Experience />
    <Services />
    <Contact />
    <Footer />
    <Testimonials />
    
    </>
  )
}

export default App