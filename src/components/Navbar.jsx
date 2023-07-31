import React, { useRef, useState } from 'react'
import { Link } from 'react-scroll'
import '../styles/Navbar.css'

import github from '../assets/navbar/github.svg'
import linkedin from '../assets/navbar/linkedin.svg'
import cv from '../assets/navbar/cv.svg'

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  const refNav = useRef()
  const refMenu = useRef()
  const refBtnToggle = useRef()
  const refIcon = useRef()

  const handleToggle = () => {
    if (menuToggle) {
      setMenuToggle(false)
      refMenu.current.style.left = '-100%'
      refIcon.current.classList.replace('fa-times', 'fa-bars')
    } else {
      setMenuToggle(true)
      const calc = refNav.current.offsetTop + refNav.current.clientHeight
      refMenu.current.style.top = calc - 0.5 + 'px'
      refMenu.current.style.left = '0'
      refIcon.current.classList.replace('fa-bars', 'fa-times')
    }
  }
  return (
      <nav ref={refNav} className="navbar">
        <button
          onClick={handleToggle}
          ref={refBtnToggle}
          className="btn-toggle"
        >
          <i ref={refIcon} className="fa fa-bars" aria-hidden="true"></i>
        </button>

        <div ref={refMenu} className="nav_menu">
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

        <div className="nav_web-icons">
          <a
            className="nav_web-icon"
            href="Ignacio-Escudero-CV.pdf"
            download={'Ignacio Escudero CV'}
          >
            <img className="img_web-icon" src={cv} alt="" />
          </a>
          <a
            className="nav_web-icon"
            href="https://www.linkedin.com/in/ignacio-escudero-a8a651222/"
            target="_BLANK"
          >
            <img className="img_web-icon" src={linkedin} alt="" />
          </a>
          <a
            className="nav_web-icon"
            href="https://github.com/Aztecaa"
            target="_BLANK"
          >
            <img className="img_web-icon" src={github} alt="" />
          </a>
        </div>
      </nav>
  )
}

export default Navbar
