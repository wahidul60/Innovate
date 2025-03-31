import React from 'react'
import Container from './Container'

const GalleryFunfact = ({text, text2, className}) => {
  return (
    <section>        
            <div className={`text-center ${className}`}>
                <h1 className='font-Sans text-[64px] text-secondary font-extrabold'>{text}</h1>
                <p className='font-sans text-[36px] font-bold'>{text2}</p>
            </div>        
    </section>
  )
}

export default GalleryFunfact
