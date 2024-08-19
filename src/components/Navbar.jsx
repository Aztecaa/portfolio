import React, { useRef, useState } from 'react'
import { Link } from 'react-scroll'
import '../styles/Navbar.css'

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  const refNav = useRef()
  const refMenu = useRef()
  const refBtnToggle = useRef()
  const refIcon = useRef()

  const handleToggle = () => {
    if (menuToggle) {
      setMenuToggle(false)
      refMenu.current.style.right = '-50%'
      refIcon.current.classList.replace('fa-times', 'fa-bars')
    } else {
      setMenuToggle(true)
      const calc = refNav.current.offsetTop + refNav.current.clientHeight
      refMenu.current.style.top = calc - 0.5 + 'px'
      refMenu.current.style.right = '0'
      refIcon.current.classList.replace('fa-bars', 'fa-times')
    }
  }
  return (
    <nav ref={refNav} className="navbar fadeToBottom opacity-color flex justify-end lg:justify-center fixed p-2 lg:p-0 top-0 z-10">
      <div ref={refMenu} className="nav_menu gap-1 justify-end opacity-color lg:bg-transparent rounded-bl-md">
        <Link onClick={handleToggle} className="link" to="home" smooth={true}>
          <span className="menu_span-icon">
            <i className="fa fa-home"></i>
          </span>
          Inicio
        </Link>
        <Link
          onClick={handleToggle}
          className="link"
          to="aboutMe"
          smooth={true}
        >
          <span className="menu_span-icon">
            <i className="fa fa-male" aria-hidden="true"></i>
          </span>
          Sobre mi
        </Link>
        <Link
          onClick={handleToggle}
          className="link"
          to="myStack"
          smooth={true}
        >
          <span className="menu_span-icon">
            <i className="fa fa-cubes" aria-hidden="true"></i>
          </span>
          Mi Stack
        </Link>
        <Link
          onClick={handleToggle}
          className="link"
          to="portfolio"
          smooth={true}
        >
          <span className="menu_span-icon">
            <i className="fa fa-briefcase" aria-hidden="true"></i>
          </span>
          Portafolio
        </Link>
        <Link
          onClick={handleToggle}
          className="link"
          to="contact"
          smooth={true}
        >
          <span className="menu_span-icon">
            <i className="fa fa-phone" aria-hidden="true"></i>
          </span>
          Contacto
        </Link>
      </div>
      <button
        onClick={handleToggle}
        ref={refBtnToggle}
        className="btn-toggle"
      >
        <i ref={refIcon} className="fa fa-bars" aria-hidden="true"></i>
      </button>
    </nav>
  )
}

export default Navbar
