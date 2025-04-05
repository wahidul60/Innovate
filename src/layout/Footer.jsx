import React from 'react'
import ImageCom from '../components/ImageCom'
import Logo from '../assets/Logo Main.png'
import Flex from '../components/Flex'
import List from '../components/List'
import Container from '../components/Container'

const Footer = () => {
  return (
    <section className='bg-[#48409C] pt-[140px] pb-[57px]'>
     <Container>
     <Flex className='gap-[93px] pb-[80px]'>
        <div className='w-5/12'>
          <ImageCom src={Logo}/>
          <p className='pt-[44px] font-Nunito text-[18px] font-normal text-[#FEFEFE] leading-[32.4px] '>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
        </div>
        <div className='w-2/12'>
          <h1 className='font-Sans text-[24px] leading-semibold text-[#FEFEFE] pb-12' >Features</h1>
          <ul>
            <li className='font-Nunito text-[20px] leading-semibold text-[#FEFEFE] pb-[30px]'>Home</li>
            <li className='font-Nunito text-[20px] leading-semibold text-[#FEFEFE] pb-[30px]'>About</li>
            <li className='font-Nunito text-[20px] leading-semibold text-[#FEFEFE] pb-[30px]'>Benifit</li>
            <li className='font-Nunito text-[20px] leading-semibold text-[#FEFEFE] pb-[30px]'>Pricing</li>
            <li className='font-Nunito text-[20px] leading-semibold text-[#FEFEFE] pb-[30px]'>Blog</li>
          </ul>          
        </div>
        <div className='w-3/12'>
          <h1 className='font-Sans text-[24px] leading-semibold text-[#FEFEFE] pb-12 '>Products</h1>
          <ul>
            <li className='font-Nunito text-[20px] leading-semibold text-[#FEFEFE] pb-[30px]'>Task Management</li>
            <li className='font-Nunito text-[20px] leading-semibold text-[#FEFEFE] pb-[30px]'>Company growth</li>
            <li className='font-Nunito text-[20px] leading-semibold text-[#FEFEFE] pb-[30px]'>Time tracking</li>
          </ul>          
        </div>
        <div className='w-2/12'>
          <h1 className='font-Sans text-[24px] leading-semibold text-[#FEFEFE] pb-12 '>Support</h1>
          <ul>
            <li className='font-Nunito text-[20px] leading-semibold text-[#FEFEFE] pb-[30px]'>Customer</li>
            <li className='font-Nunito text-[20px] leading-semibold text-[#FEFEFE] pb-[30px]'>Accessibility</li>
            <li className='font-Nunito text-[20px] leading-semibold text-[#FEFEFE] pb-[30px]'>Contact</li>
          </ul>         
        </div>
      </Flex>
      <Flex>
        <div className='w-8/12 font-Nunito text-[18px] leading-semibold text-[#FEFEFE]'><p>@20201 Innovate.All rights reserved.</p></div>
        <div className='w-4/12 flex gap-[60px]'>
          <p className=' font-Nunito text-[18px] leading-semibold text-[#FEFEFE]'>Privacy policy</p>
          <p className='font-Nunito text-[18px] leading-semibold text-[#FEFEFE]'>Terms & condition</p>
        </div>
      </Flex>
     </Container>
    </section>
  )
}

export default Footer
