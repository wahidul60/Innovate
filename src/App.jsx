import React from 'react'
import Navbar from './layout/Navbar'
import Banner from './layout/Banner'
import Gallery from './layout/Gallery'
import WhyChoose from './layout/WhyChoose'
import CardSection from './layout/CardSection'
import Impact from './layout/Impact'
import PlanSection from './layout/PlanSection'




const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Gallery/>  
      <WhyChoose/>  
      <CardSection/>
      <Impact/>
      <PlanSection/>
    </div>
  )
}

export default App
