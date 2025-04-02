import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import Icon2 from '../assets/icon2.png'
import Icon3 from '../assets/icon3.png'
import ImgDivP from '../components/ImgDivP'


const Impact = () => {
  return (
    <section className='py-28'>
        <Container>
            <div className='flex flex-col items-center pb-[74px]'>
                <Heading text='We create real impact' className='pb-[23px]'/>  
                <p className='font-Paprika font-normal text-[18px] leading-7 w-[558px] text-[#726E9E] text-center'>We design, build and support websites and apps for clients worldwide. Create beautiful, eye-catching on-page messages without the need for a developer.</p>
            </div>
            <Flex>
                <div className='w-1/2'>
                    <ImgDivP src={Icon2} classH='font-Sans font-bold text-[30px] pb-5' classP='font-Paprika font-normal text-[18px] w-[343px]' heading='Competitive analysis' paragraph='With an all-new look and powerful features, Ekko is the best way to ensure success for your business.'/>
                    <ImgDivP src={Icon3} classH='font-Sans font-bold text-[30px] pb-5' classP='font-Paprika font-normal text-[18px] w-[309px]' heading='Strategy And research' paragraph='Save money and start building your website using the best tools available on the market today.'/>
                </div>
                <div className='w-1/2 relative'>
                    <div className='absolute w-[227px] h-[273px] bg-slate-600 rounded-[20px] top-[30px] '></div>
                    <div className='absolute w-[161px] h-[140px] bg-slate-600 rounded-[20px] top-0 left-[260px] '></div>
                    <div className='absolute w-[364px] h-[310px] bg-slate-600 rounded-[20px] border-white border-[6px] right-0 bottom-0'></div>
                </div>                
            </Flex>        
        </Container>
    </section>
  )
}

export default Impact
