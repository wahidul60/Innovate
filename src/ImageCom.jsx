import React from 'react'

const ImageCom = ({src,alt, className}) => {
  return (
    <div>
      <img className={`${className}`} src={src} alt={alt} />
    </div>
  )
}

export default ImageCom
