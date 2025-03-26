import React from 'react'

const Heading = ({text, className}) => {
  return (
    <div>
      <h1 className={`font-Sans text-5xl font-semibold text-thirdly ${className}`}>{text}</h1>
    </div>
  )
}

export default Heading
