import React from 'react'
import ImageCom from './ImageCom'

const ImgDivP = ({src, heading, paragraph, classH, classP}) => {
  return (
    <div className='flex gap-[35px]'>
        <ImageCom src={src}/>
        <div className='pb-10'> 
            <h5 className={`${classH}`}>{heading}</h5>
            <p className={`${classP}`}>{paragraph}</p>
        </div>
    </div>
  )
}

export default ImgDivP
