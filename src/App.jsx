import React from 'react'
import List from './components/List'

const App = () => {
  return (
    <div className='bg-[#160C6D] w-[1920px] h-[100px] flex gap-[43px] justify-center items-center'>
      <List className='' text='Home'/>
      <List className='' text='About'/>
      <List className='' text='Service'/>
      <List className='' text='Portfolio'/>
      <List className='' text='Price'/>
      <List className='' text='Blog'/>      
    </div>
  )
}

export default App
