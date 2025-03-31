import React from 'react'
import Point from '../assets/point.png'
import ImageCom from './ImageCom'

const WhyC1stDiv = ({text,className}) => {
  return (
    <div className={`flex gap-[37px] items-center ${className} `}>
        <ImageCom src={Point}/>
        <p className='font-Paprika font-normal text-[18px] text-[#726E9E] leading-[30px]'>{text}</p>
    </div>
  )
}

export default WhyC1stDiv
