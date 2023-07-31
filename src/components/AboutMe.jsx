//@ts-check
import React from "react";
import { Link } from "react-scroll";
// @ts-ignore
import ilustration1 from "../assets/aboutMe/ilustration1.svg";
import "../styles/AboutMe.css";

const AboutMe = () => {
    return (
        <section id="aboutMe">
            <div className="aboutMe-container">
                <div className="aboutMe-content">
                    <h3 className="flicker ">Sobre mi</h3>
                    <p className="aboutMe-p">
                        Soy alguien que esta siempre intentando ir hacia adelante, por tanto todos
                        los días intento aprender, generar y construir. camino por la programación
                        podría decirse que empezó en la secundaria con C++ y Pseint, resolviendo
                        problemas matemáticos y haciendo uno que otro juego. <br />
                        Hoy soy un desarrollador web con el stack PERN utilizando React Js como
                        framework pero estoy dispuesto a aprender lo que sea necesario para el
                        puesto que se me asigne. Si desea seguir conociendo de mi puede contactarme, desde ya un gran saludo :D
                    </p>
                    <div className="aboutMe-btns">
                        <button className="btn-aboutMe">
                            <Link className="link" to="contact" smooth={true}>
                                Contactarme
                            </Link>
                        </button>
                        <button className="btn-aboutMe">
                            <a href="Ignacio-Escudero-CV.pdf" download={"Ignacio Escudero CV"}>
                                Descargar CV
                            </a>
                        </button>
                    </div>
                    <h4>En mis tiempos libres...</h4>
                    <ul>
                        <li>👥 Paso tiempo con mis familia y amigos</li>
                        <li>🍿 Veo una que otra serie</li>
                        <li>🎸 Toco guitarra</li>
                        <li>🌳 Aprendo a programar videojuegos</li>
                    </ul>
                </div>
                <figure className="aboutMe-ilustration d-flex-center">
                    <img className="ilustration1" src={ilustration1} alt="" />
                </figure>
            </div>
        </section>
    );
};

export default AboutMe;
