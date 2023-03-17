//@ts-check
import React from 'react'
import { Link } from 'react-scroll'
// @ts-ignore
import ilustration1 from '../assets/aboutMe/ilustration1.svg'
import '../styles/AboutMe.css'

const AboutMe = () => {
  return (
    <div id="aboutMe">
      <h2 className="flicker">Sobre mi</h2>
      <div className="containAboutMe">
        <section className="sectIlustration">
          <img className="ilustration1" src={ilustration1} alt="" />
        </section>
        <section className="sectAboutMe textAboutMe">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            nobis dignissimos, earum, incidunt voluptatem totam ullam in quidem
            adipisci a repudiandae suscipit vitae nam tenetur omnis officia
            accusamus dolor atque. :D
          </p>
          <p>Jobbies y otras actividades</p>

          <div className='aboutMe-btns'>
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
        </section>
      </div>
    </div>
  )
}

export default AboutMe
