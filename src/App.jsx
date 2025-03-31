import React from 'react'
import Navbar from './layout/Navbar'
import Banner from './layout/Banner'
import Gallery from './layout/Gallery'
import WhyChoose from './layout/WhyChoose'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Gallery/>  
      <WhyChoose/>    
    </div>
  )
}

export default App
