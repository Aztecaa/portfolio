import React from 'react'
import '../styles/MyStack.css'
import imgsMS from '../assets/myStack/imgsMS'

const MyStack = () => {
  return (
    <section id="myStack">
      <h3 className="flicker">Mi stack</h3>

      <div className="myStack_container">
        <p className="myStack_description-principal">
          En esta seccion se encuentra todo lo relacionado con mi curva de
          aprendizaje y mis certificaciones mostrando tanto las tecnologias
          basicas como tambien diferentes metodos o tecnologias utilizadas en
          diferentes paginas o aplicaciones web
        </p>

        <article className="myStack_item">
          <div className="myStack_item-title">
            <h5>
              Fundamentos de la programación
              <a
                href="https://certificates.academlo.com/en/verify/30716456102592"
                target="_BLANK"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="certificate-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317V5.5zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                </svg>
              </a>
              <hr className="myStack-hr" />
            </h5>
          </div>

          <div className="myStack_item-content">
            <div className="myStack_item-description d-flex-center">
              <p>
                habilidades necesarias para desarrollar de manera correcta la
                parte visual de un sitio web responsivo sin utilizar
                librerías/frameworks, así como agregar contenido dinámico con
                javascript, trabajar de manera colaborativa con git.
              </p>
            </div>
            <div className="myStack_item-icons d-flex-center">
              <img className="myStack_img" src={imgsMS.img1} alt="html5_logo" />
              <img className="myStack_img" src={imgsMS.img2} alt="css3_logo" />
              <img
                className="myStack_img"
                src={imgsMS.img3}
                alt="javascript_logo"
              />
            </div>
          </div>
        </article>

        <article className="myStack_item item-left">
          <div className="myStack_item-title">
            <h5>
              Desarrollo front-end
              <a
                href="https://certificates.academlo.com/en/verify/93055241346077"
                target="_BLANK"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="certificate-icon "
                  viewBox="0 0 16 16"
                >
                  <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317V5.5zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                </svg>
              </a>
              <hr className="myStack-hr" />
            </h5>
          </div>

          <div className="myStack_item-content reverse d-flex-center">
            <div className="myStack_item-description">
              <p>
                Crear aplicaciones web con React JS, logrando una gran
                interacción con el usuario usando los conocimientos previos de
                HTML, CSS y Javascript.
              </p>
            </div>

            <div className="myStack_icons d-flex-center">
              <img className="myStack_img" src={imgsMS.img4} alt="react_logo" />
              <img
                className="myStack_img"
                src={imgsMS.img5}
                alt="bootstrap_logo"
              />
              <img className="myStack_img" src={imgsMS.img6} alt="git_logo" />
            </div>
          </div>
        </article>

        <article className="myStack_item item-reverse">
          <div className="myStack_item-title">
            <h5>
              Desarrollo back-end
              <a
                href="https://certificates.academlo.com/en/verify/57128504261252"
                target={'_BLANK'}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="certificate-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317V5.5zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                </svg>
              </a>
              <hr className="myStack-hr" />
            </h5>
          </div>

          <div className="myStack_item-content">
            <div className="myStack_item-description d-flex-center">
              <p>
                construir una aplicación desde el servidor con NodeJS y
                ExpressJS desde 0 hasta el despliegue en un servidor. Tendrá la
                habilidad de realizar una API Rest usando una base de datos
                relacional, autenticación de usuarios, seguridad ante ataques
                XSS y CSRF, podrá validar los datos que recibe el servidor y
                podrá construir middlewares personalizados con ExpressJS.
              </p>
            </div>
            <div className="myStack_icons d-flex-center">
              <img
                className="myStack_img"
                src={imgsMS.img7}
                alt="nodejs_logo"
              />
              <img
                className="myStack_img"
                src={imgsMS.img8}
                alt="sequelizejs_logo"
              />
              <img
                className="myStack_img"
                src={imgsMS.img9}
                alt="postgresql_logo"
              />
            </div>
          </div>
        </article>
      </div>

      <div className="myStack-more">
        <h5>Otras tecnologias</h5>
        <div></div>
      </div>
    </section>
  )
}

export default MyStack
