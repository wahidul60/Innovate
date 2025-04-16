import React from 'react'

import {
  createRoutesFromElements, createBrowserRouter, Route, RouterProvider
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/services" element={<Services />}></Route>
    </>    
  )
);

const App = () => {
  return (
    <div>
        <RouterProvider router={router} />   
 
    </div>
     
  )
}

export default App
