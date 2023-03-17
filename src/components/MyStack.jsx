import React from 'react'
import '../styles/MyStack.css'
import imgsMS from '../assets/myStack/imgsMS'

const MyStack = () => {
  return (
    <section id="myStack">
      <h2 className="flicker">Mi stack</h2>
      <p className="myStack-description">
        En esta seccion se encuentra todo lo relacionado con mi curva de
        aprendizajes y mis certificaciones mostrando tanto las tecnologias
        basicas como tambien diferentes metodos o tecnologias utilizadas en
        diferentes paginas o aplicaciones web
      </p>

      <article className="myStack_article1">
        <div className="myStack-text">
          <div className="myStack-subtitle">
            <h3>
              Fundamentos de la programación
              <a
                href="https://certificates.academlo.com/en/verify/30716456102592"
                target="_BLANK"
              >
                <img
                  className="certificate-icon"
                  src={imgsMS.img10}
                  alt="certificate_icon"
                />
              </a>
            </h3>
          </div>
          <hr />
          <p className="description">
            habilidades necesarias para desarrollar de manera correcta la parte
            visual de un sitio web responsivo sin utilizar librerías/frameworks,
            así como agregar contenido dinámico con javascript, trabajar de
            manera colaborativa con git.
          </p>
        </div>
        <div className="myStack_icons">
          <img className="myStack_img" src={imgsMS.img1} alt="html5_logo" />
          <img className="myStack_img" src={imgsMS.img2} alt="css3_logo" />
          <img
            className="myStack_img"
            src={imgsMS.img3}
            alt="javascript_logo"
          />
        </div>
      </article>

      <article className="myStack-article2">
        <div className="myStack-text">
          <div className="myStack-subtitle">
            <h3>
              Desarrollo front-end
              <a
                href="https://certificates.academlo.com/en/verify/93055241346077"
                target="_BLANK"
              >
                <img
                  className="certificate-icon"
                  src={imgsMS.img10}
                  alt="certificate_icon"
                />
              </a>
            </h3>
          </div>
          <hr />
          <p className="description">
            Crear aplicaciones web con React JS, logrando una gran interacción
            con el usuario usando los conocimientos previos de HTML, CSS y
            Javascript.
          </p>
        </div>
        <div className="myStack_icons">
          <img className="myStack_img" src={imgsMS.img4} alt="react_logo" />
          <img className="myStack_img" src={imgsMS.img5} alt="bootstrap_logo" />
          <img className="myStack_img" src={imgsMS.img6} alt="git_logo" />
        </div>
      </article>

      <article className="myStack_article1">
        <div className="myStack-text">
          <div className="myStack-subtitle">
            <h3>
              Desarrollo back-end
              <a
                href="https://certificates.academlo.com/en/verify/57128504261252"
                target={'_BLANK'}
              >
                <img
                  className="certificate-icon"
                  src={imgsMS.img10}
                  alt="certificate_icon"
                />
              </a>
            </h3>
          </div>
          <hr />
          <p className="description">
            construir una aplicación desde el servidor con NodeJS y ExpressJS
            desde 0 hasta el despliegue en un servidor. Tendrá la habilidad de
            realizar una API Rest usando una base de datos relacional,
            autenticación de usuarios, seguridad ante ataques XSS y CSRF, podrá
            validar los datos que recibe el servidor y podrá construir
            middlewares personalizados con ExpressJS.
          </p>
        </div>
        <div className="myStack_icons">
          <img className="myStack_img" src={imgsMS.img7} alt="nodejs_logo" />
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
      </article>

      <article>
        <h3>Otras tecnologias</h3>
        <div className="otherTechnologis"></div>
      </article>
    </section>
  )
}

export default MyStack
