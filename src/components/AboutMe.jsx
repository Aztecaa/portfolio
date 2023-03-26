//@ts-check
import React from 'react'
import { Link } from 'react-scroll'
// @ts-ignore
import ilustration1 from '../assets/aboutMe/ilustration1.svg'
import '../styles/AboutMe.css'

const AboutMe = () => {
  return (
    <section id="aboutMe">
      <h3 className="flicker">Sobre mi</h3>
      <div className="aboutMe-container">
        <div className="aboutMe-content">
          <p className="aboutMe-p">
            Soy alguien que esta dispuesto a tanto aprender como descubrir,
            crear y enseñar. <br />
            Una persona comunicativa, responsable y me siento capaz de cualquier
            cosa que se me proponga, se que con la constancia y la perseverancia
            puedo lograr cada objetivo, tarea o reto que se me asigne. <br />
            Si te gustaria saber mas de mi podes descargar mi cv o contactarme
            mas adelante :D
          </p>
          <h4>En mis tiempos libres...</h4>
          <ul>
            <li>Juego videojuegos 🎮</li>
            <li>Hago ejercicio 🏋️‍♂️</li>
            <li>Toco la guitarra 🎸</li>
            <li>Pasar tiempo con mis mascotas 🐾</li>
            <li>Aprendo a programar videojuegos 🧠</li>
          </ul>
          <div className="aboutMe-btns">
            <button className="btn-aboutMe">
              <a
                href="Ignacio-Escudero-CV.pdf"
                download={'Ignacio Escudero CV'}
              >
                Descargar CV
              </a>
            </button>
            <button className="btn-aboutMe">
              <Link className="link" to="contact" smooth={true}>
                Contactarme
              </Link>
            </button>
          </div>
        </div>
        <figure className="aboutMe-ilustration d-flex-center">
          <img className="ilustration1" src={ilustration1} alt="" />
        </figure>
      </div>
    </section>
  )
}

export default AboutMe
