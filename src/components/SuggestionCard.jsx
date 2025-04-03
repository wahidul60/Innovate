import React from 'react'
import Flex from '../components/Flex'

const SuggestionCard = ({news,postBy,time,heading}) => {
  return (
    <Flex className='pb-[100px]' >
        <div className='bg-[#C4C4C4] w-[379px] h-[220px] rounded-[20px]'></div>
        <div>
            <Flex>
                <p className='font-Quicksand font-normal text-[16px]'>{news}</p>
                <p>by {postBy}</p>
                <p>Posted {time}</p>
            </Flex>
            <h1 className='leading-[55px] font-bold font-Sans text-[30px]'>{heading}</h1>
            <h6 className='group group-hover/h6:text-[#FAFAFE] p-1 relative text-[18px] font-Sans font-bold'>Read More <span className=' group-hover:w-[125px] group-hover:rounded-l-3xl duration-300 w-[30px] h-[40px] bg-[#1bbf004d] absolute rounded-r-3xl -right-[12px] top-0 group-hover/h6:bg-[#fafafe4d]'></span></h6>
        </div>
    </Flex>
  )
}

export default SuggestionCard
