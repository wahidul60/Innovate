import React from 'react'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import PlanCard from '../components/PlanCard'
import PlanCard1 from '../assets/plancard1.png'
import PlanCard2 from '../assets/PlanCard2.png'
import PlanCard3 from '../assets/PlanCard3.png'
import Container from '../components/Container'


const PlanSection = () => {
  return (
    <section className='bg-[#F9F9FB] py-[100px] px-[200px]'>
        <Container>
            <Heading className='text-center pb-[64px]' text='Choose the Right Plan'/>
            <Flex className='gap-[30px]'> 
                <PlanCard planName='Basic' src={PlanCard1} amount='$160' description='Responsive Design Dynamic Elements Service Pages Custom Design & Features'/>
                <PlanCard planName='Professional' src={PlanCard2} amount='$240' description='Responsive Design Dynamic Elements Service Pages Custom Design & Features'/>
                <PlanCard planName='Exclusive' src={PlanCard3} amount='$325' description='Responsive Design Dynamic Elements Service Pages Custom Design & Features'/>
            </Flex>
        </Container>
        
    </section>
  )
}

export default PlanSection
