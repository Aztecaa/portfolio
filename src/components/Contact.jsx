import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div id="contact">
      <h2 className="flicker">Contact</h2>
      <div className="contact-container">
        <div className="contact-form">
          <form name="contact" method="post" data-netlify="true">
            <div>
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="enter your name"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="enter your email"
              />
            </div>
            <div className="block">
              <label htmlFor="message">Mensaje</label>
              <textarea name="message" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="block">
              <button type="submit">
                Send <i className="fa fa-paper-plane" aria-hidden="true"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="contact-info">
          <h3>More info</h3>
          <ul>
            <li>
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              Cordoba, Argentina
            </li>
            <li>
              <i className="fa fa-phone" aria-hidden="true"></i>
              +54 3544 300465
            </li>
            <li>
              <i class="fa fa-envelope-open" aria-hidden="true"></i>
              ignacioescazt01@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <footer>
        <h3>Hecho por Ignacio Gabriel Escudero 🍕</h3>
      </footer>
    </div>
  )
}

export default Contact
