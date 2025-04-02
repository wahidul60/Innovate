import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import Card from '../components/Card'
import CardImage1 from '../assets/CardImage1.png'
import CardImage2 from '../assets/CardImage2.png'
import CardImage3 from '../assets/CardImage3.png'
import CardImage4 from '../assets/CardImage4.png'
import CardImage5 from '../assets/CardImage5.png'

const CardSection = () => {
  return (
    <section className='bg-[#F6F5FF] py-[100px]'>
        <Container>
            <Flex className='flex-wrap gap-[30px]'>
              <div className='w-[370px] h-[395px]'>
                  <h4 className='font-Sans text-[48px] font-bold pb-5'>What We Do</h4>
                  <p className='font-Sans tex-[18px] pb-14 leading-8 text-[#6C7D93]'>We are now a team of strategists, engineers, designers, and marketers who both use and develop technology </p>
                  <Button text='Contact Us'/>
              </div>
              <Card image = {CardImage1} text='Web Design & Dev ' paragraph='Social Media has changed the way we interact & do business while creating'/>
              <Card image = {CardImage2} text='Software Dev ' paragraph='Content Marketing is the other fold of online advertisement. If you are looking to build'/>
              <Card image = {CardImage3} text='Content Writing' paragraph='Content Marketing is the other fold of online advertisement. If you are looking to build'/>
              <Card image = {CardImage4} text='Digital Marketing' paragraph='Social Media has changed the way we interact & do business while creating a new avenue.'/>
              <Card image = {CardImage5} text='Support & Training' paragraph='Content Marketing is the other fold of online advertisement. If you are looking to build'/>
            </Flex>           
        </Container>
    </section>
  )
}

export default CardSection
