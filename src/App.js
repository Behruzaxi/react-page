import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Navbarfunc from './components/Navbar'
import GetData from './GetData/GetData'

export default function App() {
  return (
    <>

    <Navbarfunc/>
      <Routes>
        <Route path='/home' element={<Header/>}/>
        
        <Route path='/result' element={<GetData/>}/>
      </Routes>
  
    </> 
  )
}


