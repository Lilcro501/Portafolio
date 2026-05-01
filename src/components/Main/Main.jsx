import React from "react";
import "../../App.css"

import Header from "../MasterPage/Header/Header"
import Footer from "../MasterPage/Footer/Footer"

import styles from "./Main.module.css"

import Js from "../../assets/Img/js.png"
import Css from "../../assets/Img/Css.png"
import html from "../../assets/Img/html.png"
import react from "../../assets/Img/react.png"
import github from "../../assets/Img/github.png"
import figma from "../../assets/Img/figma.png"
import staruml from "../../assets/Img/staruml.png"
import jira from "../../assets/Img/jira.png"

const Main = () => {
    return (
        <>
            <Header></Header>
            <main className={styles.main}>
                <p className={styles.sectionPresentation}>HOLA, MI NOMBRE ES CRISTIAN ORTIZ</p>
                <h1 className={styles.sectionTitle}>SOY DESARROLLADOR FULL STACK</h1>
                <p className={styles.sectionText}>He trabajado con java, python, js y otras herramienta!, me encanta el desarrollo de software y soy muy amante a la tecnologia!</p>


                <section className={styles.sectionTargets}>
                    <div>
                        <h1 className={styles.titleTarget}>Herramientas de trabajado</h1>
                    </div>
                    <div className={styles.sectionPosition}>
                        <div className={styles.target}>
                            <img src={Js} alt="" className={styles.imgTarget} />

                            <div className={styles.overlay}>
                                <h2>Java Script</h2>
                                <p className={styles.hiddenText}>
                                    Lenguaje de programacion para trabajar paginas web
                                </p>
                            </div>
                        </div>
                        <div className={styles.target}>
                            <img src={Css} alt="" className={styles.imgTarget} />

                            <div className={styles.overlay}>
                                <h2>Css</h2>
                                <p className={styles.hiddenText}>
                                    Diseño y estilizacion de las paginas webs
                                </p>
                            </div>
                        </div>
                        <div className={styles.target}>
                            <img src={html} alt="" className={styles.imgTarget} />

                            <div className={styles.overlay}>
                                <h2>Html</h2>
                                <p className={styles.hiddenText}>
                                    Modelado y esqueleto de la pagina web
                                </p>
                            </div>
                        </div>
                        <div className={styles.target}>
                            <img src={react} alt="" className={styles.imgTarget} />

                            <div className={styles.overlay}>
                                <h2>React</h2>
                                <p className={styles.hiddenText}>
                                    Biblioteca de Js para trabajar por medio de componentes
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*Segunda seccion */}
                    <div className={styles.sectionPosition}>
                        <div className={styles.target}>
                            <img src={github} alt="" className={styles.imgTarget} />

                            <div className={styles.overlay}>
                                <h2>Git Hub</h2>
                                <p className={styles.hiddenText}>
                                    Repositorio almacenar los proyectos y tener un historial de versiones
                                </p>
                            </div>
                        </div>

                        <div className={styles.target}>
                            <img src={figma} alt="" className={styles.imgTarget} />

                            <div className={styles.overlay}>
                                <h2>Figma</h2>
                                <p className={styles.hiddenText}>
                                    Modelado de los diseños de web de alto nivel
                                </p>
                            </div>
                        </div>
                        <div className={styles.target}>
                            <img src={staruml} alt="" className={styles.imgTarget} />

                            <div className={styles.overlay}>
                                <h2>Star Uml</h2>
                                <p className={styles.hiddenText}>
                                    Herramienta para realizar digramas de flujo, casos de uso entre otras cosas
                                </p>
                            </div>
                        </div>
                        <div className={styles.target}>
                            <img src={jira} alt="" className={styles.imgTarget} />

                            <div className={styles.overlay}>
                                <h2>Jira</h2>
                                <p className={styles.hiddenText}>
                                    Herramienta para trabajar en equipo, implementado metodologias para un desarrollo mucho mas agil
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
}
export default Main;
