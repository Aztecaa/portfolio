import React from 'react'
import '../styles/Home.css'

const Home = () => {
  return (
    <section id="home" className='flex flex-col justify-center'>
      <div className="text-center">
        <img className="my-photo rounded-full mx-auto lev" src='me.png' alt="mi foto" />
        <h1 className='text-lg fadeToTop'>
          Hola! Soy <span className='text-color2'>Ignacio G. Escudero</span>
        </h1>
        <h2 className="tracking-wider mx-1 fadeToTop">Frontend development</h2>
      </div>
      <div className="web_icons flex justify-center gap-2 absolute bottom-0 left-0 right-0 fadeToTop">
        <a
          className="mb-3 md:w-4"
          href="Ignacio-Escudero-CV.pdf"
          download={'Ignacio Escudero CV'}
        >
          <i className="fa-solid fa-user text-lg"></i>
        </a>
        <a
          className="mb-3 md:w-4"
          href="https://www.linkedin.com/in/ignacio-escudero-a8a651222/"
          target="_BLANK"
        >
          <i className="fa-brands fa-linkedin text-lg"></i>
        </a>
        <a
          className="mb-3 md:w-4"
          href="https://github.com/Aztecaa"
          target="_BLANK"
        >
          <i className="fa-brands fa-github text-lg"></i>
        </a>
      </div>
    </section>
  )
}

export default Home
