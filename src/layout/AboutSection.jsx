import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'


const AboutSection = () => {
  return (
    <section className='bg-[#463d9bcc] mb-8'>
    <Container>
        <div className='pt-40 pb-16 flex flex-col items-center'>
            <Heading text="About us" className='text-center text-white pb-7'/>
            <p className='text-justify w-[600px] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed est temporibus autem omnis minima mollitia alias, vitae ut reprehenderit eveniet fugiat. Iusto in nemo quos. Laborum quas dolorum incidunt iste! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui dolorem aperiam esse nihil, maxime animi hic iste ducimus. Sequi, consectetur fuga deleniti similique quibusdam consequuntur unde expedita! Accusamus, cupiditate doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odit autem quasi iure nemo aut accusamus voluptates corrupti eaque voluptate, eveniet laboriosam fuga reprehenderit quod animi quis dicta, doloremque aspernatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi explicabo eveniet earum maiores minus perferendis, quos, architecto iure sequi non at consectetur nihil harum accusamus adipisci unde pariatur est. Impedit!</p>
        </div>
    </Container>
    </section>

    
  )
}

export default AboutSection
