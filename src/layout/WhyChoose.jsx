import React from 'react'
import Flex from '../components/Flex'
import Container from '../components/Container'
import ImageWithPara from '../components/ImageWithPara'
import Heading from '../components/Heading'
import Button from '../components/Button'
import Point from '../assets/point.png'



const WhyChoose = () => {
  return (
   <section>
   <div className='absolute bg-BgElement2 bg-no-repeat bg-[left_-47px_top_0px] -z-30 w-full h-full'> </div>
        <Container>
            <Flex className='pt-[100px] gap-[186px] pb-[91px]'>
                <div className='w-1/2'>
                    <ImageWithPara image={Point} containerClass='mb-[32px] w-[568px] bg-[#fce5e5] py-[42px] pl-[28px] pr-[146px]' textClass='w-[319px] font-Paprika font-normal text-[18px] text-[#726E9E] leading-[30px]' text='We solve real-world problems through people and the web.'/>
                    <ImageWithPara image={Point} containerClass='pt-[32px] pb-[17px] w-[568px] pl-[28px] pr-[146px]' textClass='w-[366px] font-Paprika font-normal text-[18px] text-[#726E9E] leading-[30px]' text='We make processes and technology work efficiently together.'/>
                    <ImageWithPara image={Point} containerClass='w-[568px] pl-[28px] pr-[146px]' textClass='w-[366px] font-Paprika font-normal text-[18px] text-[#726E9E] leading-[30px]' text='We advance improve existing technology through research and development.'/>
                    <ImageWithPara image={Point} containerClass='w-[568px] pl-[28px] pr-[146px]' textClass='w-[331px] font-Paprika font-normal text-[18px] text-[#726E9E] leading-[30px]' text='We develop long-lasting and scalable solutions, relationships partnerships.'/>
                  
                </div>
                <div className='w-1/2'>
                    <Heading className='pb-[9px] font-Sans font-bold' text='Why Choose Us '/>
                    <p className='font-Paprika font-normal text-[#726E9E] text-[18px] leading-[30px] mb-[41px]'>We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs.</p>
                    <Button text='Contact Us'/>
                </div>
            </Flex>
        </Container>
   </section>
   
  )
}

export default WhyChoose
