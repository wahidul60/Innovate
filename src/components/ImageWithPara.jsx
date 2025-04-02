import React from 'react'
import ImageCom from './ImageCom'

const ImageWithPara = ({text,containerClass,textClass, image}) => {
  return (
    <div className={`gap-[37px] flex items-center justify-center ${containerClass}`}>
    <ImageCom src={image}/>
    <p className={`${textClass}`}>{text}</p>
</div>
  )
}

export default ImageWithPara


