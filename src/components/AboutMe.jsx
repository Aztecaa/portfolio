//@ts-check
import React from "react";
import { Link } from "react-scroll";
import "../styles/AboutMe.css";

const AboutMe = () => {
    return (
        <section id="aboutMe" className="pt-24 m-auto">
            <div className="mx-5 flex flex-col opacity-color rounded-md">
                <h3 className="text-color1 text-center mt-3 font-bold drop-shadow-md">Sobre mi</h3>
                <div className="grid gap-5 p-3 md:grid-cols-2">
                    <div>
                        <p className="mb-2">
                            Me llamo Ignacio Gabriel Escudero pero mis amigos me dicen Azteca, tengo 23 años y mi objetivo profesional es dedicarme a la programacion.
                        </p>
                        <p className="mb-5">
                            Despues de mi primera experiencia como programador web con una empresa de mi localidad, quiero seguir avanzando.
                        </p>
                    </div>
                    <div>
                        <p className="mb-2">La primera vez que programe fue en la especialidad secundaria, con PSeint, C++, JS y HTML, despues de terminar la secundaria recibi mi titulo con especialidad en infornatica</p>
                        <p>
                            Actualmente cuento con <span className="text-color1">2 años de experiencia</span> en mi primer año programando me dedique a aprender como autodidacta hasta que decidi realizar un curso intensivo que abarcaba principalmente <span className="text-color1">React</span>, al terminar este consegui mi primer trabajo al cabo de unos meses.
                        </p>
                    </div>
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
