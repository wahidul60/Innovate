import React from 'react'
import Container from './components/Container'
import Flex from './components/Flex'
import ImageCom from './components/ImageCom'
import Logo from './assets/Logo Main.png'
import List from './components/List'
import Button from './components/Button'

const App = () => {
  return (
    <nav className='bg-forthly'>
      <Container>
        <Flex className='items-center'>
        <div className='w-2/12 py-5'>
          <ImageCom src={Logo} alt='Logo' className=''/>
        </div>
        <div className='w-8/12 py-5'>
          <Flex className='gap-x-10 items-center justify-center'>
          <List className='' text='Home'/>
          <List className='' text='About'/>
          <List className='' text='Service'/>
          <List className='' text='Portfolio'/>
          <List className='' text='Price'/>
          <List className='' text='Blog'/>
          </Flex>
        </div>
        <div className='w-2/12 py-5 text-right' >
          <Button className='' text='Contact Us'/>
        </div>
        </Flex>        
      </Container>
    </nav>    
      
      
  )
}

export default App
