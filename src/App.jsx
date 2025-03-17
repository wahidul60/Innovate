import React from 'react'
import List from './components/List'

const App = () => {
  return (
    <div className='bg-[#160C6D] w-[1920px] h-[100px] flex gap-[43px] justify-center items-center'>
      <List text='Home'/>
      <List text='About'/>
      <List text='Service'/>
      <List text='Portfolio'/>
      <List text='Price'/>
      <List text='Blog'/>      
    </div>
  )
}

export default App
