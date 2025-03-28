import React from 'react'

const SubHeading = ({text, className}) => {
  return (
    <div>
      <h2 className={`font-Paprika font-normal text-[24px] text-center text-[#E6E5F3] leading-10 ${className}`}>{text}</h2>
    </div>
  )
}

export default SubHeading
