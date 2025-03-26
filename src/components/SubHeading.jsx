import React from 'react'

const SubHeading = ({text, className}) => {
  return (
    <div>
      <h2 className={`font-Paprika font-semibold text-lg text-thirdly leading-[30px] ${className}`}>{text}</h2>
    </div>
  )
}

export default SubHeading
