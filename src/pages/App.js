import React from 'react'
import Navbar from '../components/Navbar'
import { BrowserRouter, Link, Route, Routes }  from 'react-router-dom'
import Add from './Add' 
import Edit from './Edit'
import ListView from './ListView'

function App() {
  return (
    <>

    <Navbar/>
    <div className='container'> 
    <BrowserRouter>
    <Routes>
        
        <Route path='/' element={<ListView/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/edit/:id' element={<Edit/>} />
        </Routes>
    </BrowserRouter>
    </div>  
    </>
  )
}

export default App
