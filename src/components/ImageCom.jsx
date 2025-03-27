import React from 'react'

const ImageCom = ({src,alt,className}) => {
  return (
    <div>
      <img src={src} alt={alt} className={`${className}`} />
    </div>
  )
}

export default ImageCom
