// import { useState } from 'react'
import './App.css'
import PreLoader from './components/PreLoader'
import Bg from './components/bg'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import ScrollUp from './components/ScrollUp'
import Home from './components/Home'
import MyStack from './components/MyStack'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import { useState, useEffect } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(true)
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
