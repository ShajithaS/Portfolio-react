import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Education from "../Components/Education/Education";
import Skills from "../Components/Skills/Skills";

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Hero/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/education' element={<Education/>}></Route>
            <Route path='/skills' element={<Skills/>}></Route>

        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes