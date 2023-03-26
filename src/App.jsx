// import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import MyStack from './components/MyStack'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <MyStack />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
