// import { useState } from 'react'
import './App.css'
import { useState, useEffect } from 'react'

import PreLoader from './components/PreLoader'
import Bg from './components/Bg'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import ScrollUp from './components/ScrollUp'
import Home from './components/Home'
import MyStack from './components/MyStack'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'

function App() {
  const [isLoading, setIsLoading] = useState( )
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])
  return (
    <>
      {
        isLoading ? <PreLoader /> : <div className="App">

          <Bg />
          <Home />
          <AboutMe />
          <MyStack />
          <Portfolio />
          <Contact />
          <ScrollUp />
          <Navbar />
        </div>
      }
    </>
  )
}

export default App
