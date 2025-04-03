import React from 'react'
import ImageCom from './ImageCom'


const PlanCard = ({amount,description,src,planName}) => {
  return (
    <div className='group hover:bg-[#6B62C5] w-[370px] bg-[#FFFFFF] py-[60px] duration-300 rounded-[20px] flex flex-col items-center shadow-lg '>
    <h2 className='text-center group-hover:text-[#FFFFFF] font-Sans font-bold text-[30px] pb-[26px] duration-300'>{planName}</h2>
    <ImageCom className='pb-[20px]' src={src}/>
    <h1 className='font-Nunito font-extrabold text-5xl text-[#1BBF00] text-center pb-[6px]'>{amount}</h1>
    <p className='font-Paprika font-normal text-[18px] text-center text-[#726E9E] group-hover:text-[#FFFFFF] duration-300 w-[252px]'>{description}</p>
    </div>
  )
}

export default PlanCard
