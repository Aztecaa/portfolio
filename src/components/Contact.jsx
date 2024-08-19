import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4enybbi', 'template_pwe77p4', form.current, {
        publicKey: 'iGVgdhhcgvTql5xwY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log(form)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact" className='pt-24 text-center m-auto'>
      <div className='mx-5 md:flex'>
        <article className='rounded-t-md md:rounded-l-md md:rounded-r-none p-5 section-color'>
          <div className="contact-form ">
            <h3 className="text-color1 text-center mb-3">Contacto</h3>
            <form name="contact" ref={form} onSubmit={sendEmail}>
              <label htmlFor="user_name">
                Nombre
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  placeholder="Su nombre"
                />
              </label>
              <label htmlFor="user_email">
                Email
                <input
                  type="user_email"
                  name="user_email"
                  id="email"
                  required
                  placeholder="Su email"
                />
              </label>
              <label htmlFor="message" className='m-autocol-span-2'>
                Mensaje
                <textarea name="message" className='bg-primary-color' id="message" cols="30" rows="10" placeholder='Su mensaje'></textarea>
              </label>
              <button type="submit" className='block w-24 m-auto'>
                Enviar <i className="fa fa-paper-plane" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </article>
        <article className="contact-info p-2 bg-primary-color rounded-b-md md:rounded-l-none md:rounded-r-md">
          <h3>Mas informacion</h3>
          <ul>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              Cordoba, Argentina
            </li>
            <li>
              <i className="fa-brands fa-whatsapp"></i>
              +54 9 3544 307965
            </li>
            <li>
              <i className="fa-regular fa-envelope"></i>
              ignacioescazt01@gmail.com
            </li>
          </ul>
        </article>
      </div>
    </section >
  )
}

export default Contact
