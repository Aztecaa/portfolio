import React from "react";
import { Link } from "react-scroll";
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <section id="aboutMe" className="pt-24 m-auto">
      <div className="mx-5 flex flex-col opacity-color rounded-md">
        <h3 className="text-color1 text-center mt-3 font-bold drop-shadow-md">
          Sobre mi
        </h3>

        <div className="grid gap-5 p-3 md:grid-cols-2">
          <div>
            <p className="mb-2">
              Soy <strong>Ignacio Gabriel Escudero</strong>, Desarrollador{" "}
              <strong>Full Stack</strong> de 23 años. Trabajo con{" "}
              <span className="text-color1">JavaScript</span>,{" "}
              <span className="text-color1">HTML5</span>,{" "}
              <span className="text-color1">CSS3</span>,{" "}
              <span className="text-color1">React</span>,{" "}
              <span className="text-color1">Vue 3</span>,{" "}
              <span className="text-color1">Node.js</span>,{" "}
              <span className="text-color1">Express</span>,{" "}
              <span className="text-color1">API REST</span> y{" "}
              <span className="text-color1">SQL</span>.
            </p>
            <p className="mb-2">
              Objetivo: rol de Desarrollador Full Stack, Frontend o Backend en
              un equipo de producto, con aplicaciones web en producción.
            </p>
            <p>
              Empecé a programar en la secundaria (especialidad Informática:
              PSeInt, C++, HTML y JavaScript). En 2022 cursé el{" "}
              <strong>bootcamp intensivo Full Stack de Academlo</strong>{" "}
              (6 meses: mayo–octubre 2022), con módulos de Fundamentos, Frontend
              con React y Backend con Node.js. Al finalizar entré a mi primer
              puesto como programador web en una empresa local.
            </p>
          </div>

          <div>
            <p className="mb-2">
              <span className="text-color1">~4 años de experiencia</span>{" "}
              profesional (2022–2026) en sistemas reales:
            </p>
            <ul className="mb-3 list-disc pl-5">
              <li>
                Gestión para restaurantes y bares: pedidos, stock, caja y
                finanzas.
              </li>
              <li>Control de stock y caja para comercios.</li>
              <li>
                Marketplace de autos usados (equipo): compradores y vendedores.
              </li>
            </ul>
            <p>
              Producción con <span className="text-color1">Vue 3</span>, Node.js,
              Express, bases relacionales y Git. Deploy: Railway, Render,
              Netlify, Hostinger. Media: Cloudinary.
            </p>
          </div>
        </div>

        <div className="px-3 pb-3">
          <p className="mb-2 font-bold text-color1">
            Formación — Academlo Full Stack (6 meses)
          </p>
          <p className="mb-2">
            Programa intensivo mayo–octubre 2022. Certificados verificables:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Fundamentos de Desarrollo Web —{" "}
              <time dateTime="2022-06-16">16/06/2022</time>
            </li>
            <li>
              Desarrollo de Aplicaciones Web con React —{" "}
              <time dateTime="2022-08-12">12/08/2022</time>
            </li>
            <li>
              Back-End Node — <time dateTime="2022-10-12">12/10/2022</time>
            </li>
            <li>
              Programa Full Stack de Desarrollo —{" "}
              <time dateTime="2022-10-17">17/10/2022</time>
            </li>
          </ul>
        </div>

        <div className="flex justify-center gap-3 pb-3 pl-3">
          <button className="bg-color1 text-md rounded-md p-1 border-none">
            <Link className="link" to="contact" smooth={true}>
              Contactarme
            </Link>
          </button>
          <button className="bg-color1 text-md rounded-md p-1 border-none">
            <a href="Ignacio-Escudero-CV.pdf" download={"Ignacio Escudero DevCV"}>
              Descargar CV
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;