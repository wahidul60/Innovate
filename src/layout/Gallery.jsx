import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import GalleryFunfact from '../components/GalleryFunfact'




const Gallery = () => {
  return (
    <section className='relative min-h-fit'>
      <div className='absolute bg-BgElement bg-no-repeat bg-[right_-47px_top_0px] -z-30 w-full h-full'> </div> 
       <Container>
            <Flex className='justify-between'>
                <div className='bg-[#C4C4C4] h-[350px] w-[270px] rounded-[20px] relative -top-[116px] -z-10'></div>
                <div className='bg-[#C4C4C4] h-[496px] w-[200px] rounded-[20px] relative -top-[139px] -z-10'></div>
                <div className='bg-[#C4C4C4] h-[326px] w-[340px] rounded-[20px] relative -top-[29px] -z-10'></div>
                <div className='bg-[#C4C4C4] h-[482px] w-[270px] rounded-[20px] relative -top-[116px] -z-10'></div>
            </Flex>    
            <Flex className='justify-between pb-[100px ]'>
               <GalleryFunfact className='pr-8 border-r-4 border-[#4f585f33]' text='53K' text2='Happy client'/>
               <GalleryFunfact className='pr-8 border-r-4 border-[#4f585f33]' text='10K' text2='Projects Done'/>
               <GalleryFunfact className='pr-8 border-r-4 border-[#4f585f33]' text='120' text2='Gets Award'/>
               <GalleryFunfact text='16' text2='Operated Years'/>
            </Flex>   
       </Container>
        
    </section>
  )
}

export default Gallery
