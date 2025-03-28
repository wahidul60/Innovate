import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import Button from '../components/Button'

const Banner = () => {
  return (
    <section className='bg-backgroundIm w-full h-screen bg-no-repeat bg-cover bg-center flex justify-center'>
      <div className='bg-[#6b62c5e6] w-full h-screen pt-[246px] flex justify-center'>
        <Container>
           <h1 className='flex font-Sans font-bold  text-[84px] leading-[100px] text-center max-w-[962px] h-[220px] text-[#FAFAFE] pb-[20px] mx-auto justify-center'>You’re Unique.Your Website Should Be Too</h1>
           <SubHeading className='w-[715px] h-[176px] mx-auto pb-[16px]' text='A beautiful website passionately crafted for your small business.  Our Digital Agency development has changed the way brands and businesses use technology for growing business.'/>
           <Flex className='gap-7 pb-[254px]' >
              <Button text='get free quoto'/>
              <Button text='Learn More' />
            </Flex>    
        </Container>
      </div>
    </section>
  )
}

export default Banner
