import React from "react";
import "../styles/MyStack.css";
import imgsMS from "../assets/myStack/imgsMS";
import TechCarousel from "./TechCarousel";

const MyStack = () => {
  return (
    <section id="myStack" className="pt-24 m-auto">
      <div className="mx-5 p-5 flex flex-col section-color max-w-screen-lg rounded-md">
        <h3 className="text-color1 text-center mb-3">Mi stack</h3>
        <p className="mb-3">
          Experiencia y proyectos Desarrollador Full Stack | 2022 – 2026 Empresa
          local y proyectos propios / en equipo. Sistemas de gestión para
          restaurantes y bares: pedidos, control de stock, caja y finanzas.
          Sistemas de control de stock y caja para comercios. Marketplace de
          autos usados (desarrollo en equipo): conexión entre compradores y
          vendedores. Frontend en Vue 3 (experiencia previa en React). Backend
          con Node.js y Express.js: API REST, autenticación de usuarios,
          validación de datos, middlewares y medidas frente a XSS y CSRF.
          Integración con bases de datos relacionales. Deploy: Railway, Render,
          Netlify, Hostinger. Media: Cloudinary. Control de versiones con Git.            
        </p>

        <article className="mx-5 mb-5">
          <div className="flex justify-center">
            <h5 className="mr-1">Fundamentos de la programación</h5>
            <a
              className="self-center"
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
          </div>
          <hr className="bg-white h-0.5 mb-3 mx-auto" />
          <div>
            <p className="mb-3">
              habilidades necesarias para desarrollar de manera correcta la
              parte visual de un sitio web responsivo sin utilizar
              librerías/frameworks, así como agregar contenido dinámico con
              javascript, trabajar de manera colaborativa con git.
            </p>
          </div>
          <div className="flex justify-center">
            <img className="myStack_img" src={imgsMS.img1} alt="html5_logo" />
            <img className="myStack_img" src={imgsMS.img2} alt="css3_logo" />
            <img
              className="myStack_img"
              src={imgsMS.img3}
              alt="javascript_logo"
            />
          </div>
        </article>

        <article className="mx-5 mb-5">
          <div className="flex justify-center">
            <h5 className="mr-1">Desarrollo front-end</h5>
            <a
              className="self-center"
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
          </div>
          <hr className="bg-white h-0.5 mx-auto mb-3" />
          <div className="mb-5 md:flex md:flex-col-2">
            <p className="mb-3">
              Crear aplicaciones web con React JS, logrando una gran interacción
              con el usuario usando los conocimientos previos de HTML, CSS y
              Javascript.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              className="myStack_img reactlogo"
              src={imgsMS.img4}
              alt="react_logo"
            />
            <img
              className="myStack_img"
              src={imgsMS.img5}
              alt="bootstrap_logo"
            />
            <img className="myStack_img" src={imgsMS.img6} alt="git_logo" />
          </div>
        </article>

        <article className="mx-5 mb-5">
          <div className="flex justify-center">
            <h5 className="mr-1">Desarrollo back-end</h5>
            <a
              className="self-center"
              href="https://certificates.academlo.com/en/verify/57128504261252"
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
          </div>
          <hr className="bg-white h-0.5 mx-auto mb-3" />
          <div className="mb-5 md:flex md:flex-col-2">
            <p className="mb-3">
              construir una aplicación desde el servidor con NodeJS y ExpressJS
              desde 0 hasta el despliegue en un servidor. Tendrá la habilidad de
              realizar una API Rest usando una base de datos relacional,
              autenticación de usuarios, seguridad ante ataques XSS y CSRF,
              podrá validar los datos que recibe el servidor y podrá construir
              middlewares personalizados con ExpressJS.
            </p>
          </div>
          <div className="flex justify-center">
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

        <div className="max-w-screen-lg">
          <h5 className="text-center">Otras tecnologias</h5>
          <TechCarousel />
        </div>
      </div>
    </section>
  );
};

export default MyStack;
