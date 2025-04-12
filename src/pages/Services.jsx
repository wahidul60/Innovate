import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import CardSection from '../layout/CardSection'
import Impact from '../layout/Impact'
import PlanSection from '../layout/PlanSection'

const Services = () => {
  return (    
    <div>
      <Navbar/>
      <CardSection className='pt-[200px]'/>
      <Impact/>
      <PlanSection/>
      <Footer/>
    </div>
  )
}

export default Services
