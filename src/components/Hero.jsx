import React from 'react'
import videoBg from '../assets/hero/videoBg.mp4'
import wave from '../assets/hero/wave.svg'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div id="home">
      <div className="heroBg">
        <video
          className="video"
          src={videoBg}
          autoPlay
          loop
          muted
          disablePictureInPicture
        />
        <div className="homeMe" style={{ color: '#fff' }}>
          <img className="myPhoto" src="Me.jpeg" alt="" />
          <h1 className="homeName" style={{ marginBottom: '5px' }}>
            Ignacio G. Escudero
          </h1>
          <hr className="heroHr" />
          <h3 className="homeText" style={{ letterSpacing: '3px' }}>
            Frontend development
          </h3>
        </div>
        <img className="wave" src={wave} alt="wave" />
      </div>
    </div>
  )
}

export default Hero
