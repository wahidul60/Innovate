import React from 'react'
import Navbar from './layout/Navbar'
import Banner from './layout/Banner'
import Gallery from './layout/Gallery'
import WhyChoose from './layout/WhyChoose'
import CardSection from './layout/CardSection'




const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Gallery/>  
      <WhyChoose/>  
      <CardSection/>
    </div>
  )
}

export default App
