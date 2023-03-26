import React from 'react'
import me from '../assets/home/me.jpeg'
import '../styles/Home.css'

const Home = () => {
  return (
    <section id="home">
      <div className="background-video">
        <video
          className="video-bg"
          src="video-bg.mp4"
          autoPlay
          loop
          muted
          disablePictureInPicture
        ></video>
      </div>
      <div className="home_content">
        <img className="my-photo levitate" src={me} alt="" />
        <div className="home_welcome">
          <h1>
            Hola! Soy <span>Ignacio G. Escudero</span>
          </h1>
          <hr className="home_hr" />
          <h2 className="home_text">Frontend development</h2>
        </div>
      </div>
    </section>
  )
}

export default Home
