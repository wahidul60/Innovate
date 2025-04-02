import React from 'react'
import Flex from '../components/Flex'
import Container from '../components/Container'
import WhyC1stDiv from '../components/WhyC1stDiv'
import Heading from '../components/Heading'
import Button from '../components/Button'


const WhyChoose = () => {
  return (
   <section>
   <div className='absolute bg-BgElement2 bg-no-repeat bg-[left_-47px_top_0px] -z-30 w-full h-full'> </div>
        <Container>
            <Flex className='pt-[100px] gap-[186px] pb-[91px]'>
                <div className='w-1/2'>
                    <WhyC1stDiv className='bg-[#fce5e5] py-[42px] pl-[28px] pr-[146px] w-[568px] h-[144px] mb-[32px]'  text='We solve real-world problems through people and the web.'/>
                    <WhyC1stDiv className='w-[366px] mb-[17px] pl-[28px] ' text='We make processes and technology work efficiently together..'/>
                    <WhyC1stDiv className='w-[366px] pl-[28px] ' text='We advance improve existing technology through research and development.'/>
                    <WhyC1stDiv className='w-[331px]  pl-[28px] !border-r-transparent' text='We solve real-world problems through people and the web.'/>
                </div>
                <div className='w-1/2'>
                    <Heading className='pb-[9px] font-Sans font-bold' text='Why Choose Us '/>
                    <p className='font-Paprika font-normal text-[18px] leading-[30px] mb-[41px]'>We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs.</p>
                    <Button text='Contact Us'/>
                </div>
            </Flex>
        </Container>
   </section>
   
  )
}

export default WhyChoose
