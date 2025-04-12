import React from 'react'
import Navbar from '../layout/Navbar'
import Suggestion from '../layout/Suggestion'
import Footer from '../layout/Footer'
import AboutSection from '../layout/AboutSection'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <AboutSection/>      
        <Suggestion/>
        <Footer/>
    </div>
  )
}

export default Home
