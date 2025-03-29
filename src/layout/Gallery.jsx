import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'


const Gallery = () => {
  return (
    <section>
       <Container>
            <Flex className='justify-between' >
                <div className='bg-[#C4C4C4] h-[350px] w-[270px] rounded-[20px] relative -top-[116px] -z-10'></div>
                <div className='bg-[#C4C4C4] h-[496px] w-[200px] rounded-[20px] relative -top-[139px] -z-10'></div>
                <div className='bg-[#C4C4C4] h-[326px] w-[340px] rounded-[20px] relative -top-[29px] -z-10'></div>
                <div className='bg-[#C4C4C4] h-[482px] w-[270px] rounded-[20px] relative -top-[116px] -z-10'></div>
            </Flex>
            
       </Container>
        
    </section>
  )
}

export default Gallery
