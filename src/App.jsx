import './App.css'
import AboutMe from './components/AboutMe'
import Bg from './components/Bg'
import Contact from './components/Contact'
import ScrollUp from './components/ScrollUp'
import Home from './components/Home'
import MyStack from './components/MyStack'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className="App">
      <Bg />
      <Navbar />
      <Home />
      <AboutMe />
      <MyStack />
      <Portfolio />
      <Contact />
      <ScrollUp />
    </div>
  )
}

export default App
