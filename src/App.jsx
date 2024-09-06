import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './components/LandingPage'
import { Navbar } from './components/Navbar'
import Content from './components/Content'

function App() {

  return (
    <>
    <div className='main w-full h-[70vh] items-center flex flex-col'>
      <Navbar/>
      {/* <LandingPage/> */}
      <Content/>
    </div>
    </>
    
  )
}

export default App
