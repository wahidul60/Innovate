import React from 'react'
import Heading from '../components/Heading'
import ImageCom from '../components/ImageCom'
import Slider1 from '../assets/slider1.jpg'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import Container from '../components/Container'


const Slider = () => {
  return (
    <section className='bg-[#F8F8FF] pb-[100px]'> 
      <Container>
      <Flex className='flex-col items-center'>
            <Heading className='text-center pb-[79px]' text='What The People Thinks About Us'/>
                <div className='relative px-[256px] pb-14 flex flex-col items-center w-[1080px] bg-[#FFFFFF] shadow-xl rounded-3xl'>
                    <ImageCom className='rounded-full w-[147px] h-[147px] object-cover ' src={Slider1}/>
                    <Flex className='text-[#FF7628] pt-11 pb-[33px]'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </Flex>
                    <SubHeading className='pb-[48px] w-[800px] text-[#726E9E]' text='Lesser Replenish bearing they’re him cattle kind dominion. You which fill place. Land she’d subdue divided gathering blessed seasons it. Without, wherein days.'/>
                    <h1 className='pb-[5px] font-Sans font-bold text-[25px]'>Lukan Depina</h1>
                    <h6 className='font-Paprika font-normal text-[16px]'>Ceo And Head Of Idea</h6> 
                    <button className='bg-[#1BBF00] absolute p-3 rounded-full shadow-md -left-[100px] top-1/2 transform -translate-y-1/2 '><i class="fa-solid fa-chevron-left"></i></button>
                    <button className='bg-[#1BBF00] absolute p-3 rounded-full shadow-md -right-[100px] top-1/2 transform -translate-y-1/2'><i class="fa-solid fa-chevron-right"></i></button>                   
                </div>                
        </Flex>       
             
      </Container>
        
                          
    </section> 
  )
}

export default Slider
