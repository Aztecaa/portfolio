// import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Hero from './components/Hero'
import MyStack from './components/MyStack'
import Navbar from './components/NavBar'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <MyStack />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
