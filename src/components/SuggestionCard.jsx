import React from 'react'
import Flex from '../components/Flex'

const SuggestionCard = ({news,postBy,time,heading}) => {
  return (
    <Flex className='pb-[60px] gap-[80px]' >
        <div className='bg-[#C4C4C4] w-[379px] h-[220px] rounded-[20px]'></div>
        <div className='w-[523px]'>
            <Flex className='justify-between'>
                <p className='font-Quicksand font-bold text-[16px] text-[#1BBF00]'>{news}</p>
                <p className='text-[#726E9E]'>by{postBy}</p>
                <p className='text-[#726E9E]'>Posted{time}</p>
            </Flex>
            <h1 className='leading-[55px] font-bold font-Sans text-[28px] pb-[16px]'>{heading}</h1>
            <h6 className='group p-1 relative text-[18px] font-Sans font-bold'>Read More <span className='group-hover:w-[120px] group-hover:rounded-l-3xl duration-300 w-[30px] h-[40px] bg-[#1bbf004d] absolute rounded-r-3xl right-[410px] -top-[1px]'></span></h6>
        </div>
    </Flex>
  )
}

export default SuggestionCard
