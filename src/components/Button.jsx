import React from 'react'

const Button = ({text,className}) => {
  return (
    <div>
      <button className={`py-3.5 px-7 rounded-[100px] bg-secondary text-[#FFFFFF] font-Sans font-semibold text-lg border-2 border-transparent hover:bg-transparent hover:border-secondary hover:text-white duration-500 ${className}`} >{text}</button>
    </div>
  )
}

export default Button
