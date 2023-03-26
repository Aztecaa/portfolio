import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <h3 className="flicker">Contact</h3>
      <div className="contact-container">
        <div className="contact-form">
          <form name="contact" method="POST" data-netlify="true">
            <div>
              <label htmlFor="name">
                Nombre
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="enter your name"
                />
              </label>
            </div>
            <div>
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="enter your email"
                />
              </label>
            </div>
            <div className="block">
              <label htmlFor="message">
                Mensaje
                <textarea name="message" id="" cols="30" rows="10" placeholder='enter you message'></textarea>
              </label>
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
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              Cordoba, Argentina
            </li>
            <li>
              <i className="fa fa-phone" aria-hidden="true"></i>
              +54 3544 300465
            </li>
            <li>
              <i className="fa fa-envelope-open" aria-hidden="true"></i>
              ignacioescazt01@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
