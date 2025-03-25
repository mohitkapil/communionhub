import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Events from './components/Events'
import About from './components/About'
import Footer from './components/Footer'
import { Home } from 'lucide-react'
import { BrowserRouter, Routes, Route } from "react-router"

function App() {

  return (
    <div>
      <BrowserRouter>
          <Navbar />
        <div className='mt-40'>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
