import React from 'react'

const Button = ({text,className}) => {
  return (
    <div>
      <button className={`w-[151px] h-[64px] rounded-[100px] bg-secondary text-[#FFFFFF] font-Sans font-semibold text-lg border-2 border-transparent hover:bg-transparent hover:border-secondary hover:text-black duration-500 ${className}`} >{text}</button>
    </div>
  )
}

export default Button
