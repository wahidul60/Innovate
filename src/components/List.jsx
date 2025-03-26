import React from 'react'

const List = ({text, className}) => {
  return (
    <div>
      <ul>
        <li className={`font-Sans text-primary text-lg font-semibold hover:text-[#1BBF00] duration-300 leading-[100%] ${className}`}>{text}<i className="fas fa-angle-down ml-2 text-white"></i> </li>
      </ul>
    </div>
  )
}

export default List
