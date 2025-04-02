import React from 'react'
import ImageCom from './ImageCom'

const Card = ({image, paragraph, text}) => {
  return (
    <div className='group/h4 group/p group/h6 hover:bg-[#6B62C5] duration-300 w-[370px] bg-white rounded-[20px] text-center flex flex-col items-center py-12 px-[46px] shadow-md'>
      <ImageCom className='pb-[32px]' src={image}/>
      <h4 className='font-Sans font-bold text-[30px] group-hover/h4:text-[#FAFAFE] whitespace-nowrap'>{text}</h4>
      <p className=' group-hover/p:text-[#FAFAFE] font-Paprika font-normal text-[18px] leading-7 pb-[20px] text-[#726E9E] h-[120px]'>{paragraph}</p>
      <h6 className='group group-hover/h6:text-[#FAFAFE] p-1 relative text-[18px] font-Sans font-bold'>Read More <span className=' group-hover:w-[125px]  group-hover:rounded-l-3xl duration-300 w-[30px] h-[40px] bg-[#1bbf004d] absolute rounded-r-3xl -right-[12px] top-0 group-hover/h6:bg-[#fafafe4d]' ></span></h6> 
    </div>
  )
}

export default Card
