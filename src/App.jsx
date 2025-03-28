import React from 'react'
import Navbar from './layout/Navbar'
import Banner from './layout/Banner'

const App = () => {
  return (
    <div>
      <Navbar className='absolute w-full'/>
      <Banner/>
    </div>
  )
}

export default App
