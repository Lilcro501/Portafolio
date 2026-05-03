import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../App.css";

import Header from "../MasterPage/Header/Header";
import Footer from "../MasterPage/Footer/Footer";

import styles from "./Main.module.css";

import Js from "../../assets/Img/js.png";
import Css from "../../assets/Img/Css.png";
import html from "../../assets/Img/html.png";
import react from "../../assets/Img/react.png";
import github from "../../assets/Img/github.png";
import figma from "../../assets/Img/figma.png";
import staruml from "../../assets/Img/staruml.png";
import jira from "../../assets/Img/jira.png";

import SpringBoot from "../../assets/Img/SpringBoot.png";
import Mysql from "../../assets/Img/MysqlworkBench.png";
import Postgress from "../../assets/Img/postgresSQL.png";
import Django from "../../assets/Img/django.png";

const Main = () => {

    // 🔥 estado para mostrar/ocultar
    const [showMore, setShowMore] = useState(false);

    return (
        <>
            <Header />

            <main className={styles.main}>
                <p className={styles.sectionPresentation}>
                    HOLA, MI NOMBRE ES CRISTIAN ORTIZ
                </p>

                <h1 className={styles.sectionTitle}>
                    SOY DESARROLLADOR FULL STACK
                </h1>

                <p className={styles.sectionText}>
                    He trabajado con java, python, js y otras herramienta!, me encanta el desarrollo de software y soy muy amante a la tecnologia!
                </p>

                <section className={styles.sectionTargets}>

                    <h1 className={styles.titleTarget}>
                        Herramientas de trabajo
                    </h1>

                    {/* 🔹 FRONTEND */}
                    <div className={styles.sectionPosition}>
                        <div className={styles.target}>
                            <img src={Js} alt="" className={styles.imgTarget} />
                            <div className={styles.overlay}>
                                <h2>JavaScript</h2>
                                <p className={styles.hiddenText}>
                                    Lenguaje de programación para páginas web
                                </p>
                            </div>
                        </div>

                        <div className={styles.target}>
                            <img src={Css} alt="" className={styles.imgTarget} />
                            <div className={styles.overlay}>
                                <h2>CSS</h2>
                                <p className={styles.hiddenText}>
                                    Diseño y estilización de páginas web
                                </p>
                            </div>
                        </div>

                        <div className={styles.target}>
                            <img src={html} alt="" className={styles.imgTarget} />
                            <div className={styles.overlay}>
                                <h2>HTML</h2>
                                <p className={styles.hiddenText}>
                                    Estructura base de la web
                                </p>
                            </div>
                        </div>

                        <div className={styles.target}>
                            <img src={react} alt="" className={styles.imgTarget} />
                            <div className={styles.overlay}>
                                <h2>React</h2>
                                <p className={styles.hiddenText}>
                                    Librería basada en componentes
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 🔹 TOOLS */}
                    <div className={styles.sectionPosition}>
                        <div className={styles.target}>
                            <img src={github} alt="" className={styles.imgTarget} />
                            <div className={styles.overlay}>
                                <h2>GitHub</h2>
                                <p className={styles.hiddenText}>
                                    Control de versiones y repositorios
                                </p>
                            </div>
                        </div>

                        <div className={styles.target}>
                            <img src={figma} alt="" className={styles.imgTarget} />
                            <div className={styles.overlay}>
                                <h2>Figma</h2>
                                <p className={styles.hiddenText}>
                                    Diseño UI/UX
                                </p>
                            </div>
                        </div>

                        <div className={styles.target}>
                            <img src={staruml} alt="" className={styles.imgTarget} />
                            <div className={styles.overlay}>
                                <h2>StarUML</h2>
                                <p className={styles.hiddenText}>
                                    Diagramas y modelado
                                </p>
                            </div>
                        </div>

                        <div className={styles.target}>
                            <img src={jira} alt="" className={styles.imgTarget} />
                            <div className={styles.overlay}>
                                <h2>Jira</h2>
                                <p className={styles.hiddenText}>
                                    Gestión ágil de proyectos
                                </p>
                            </div>
                        </div>
                    </div>


                    <AnimatePresence>
    {showMore && (
        <motion.div
            className={styles.sectionPosition}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <div className={styles.target}>
                <img src={SpringBoot} alt="" className={styles.imgTarget} />
                <div className={styles.overlay}>
                    <h2>Spring Boot</h2>
                    <p className={styles.hiddenText}>
                        Desarrollo backend con Java
                    </p>
                </div>
            </div>

            <div className={styles.target}>
                <img src={Postgress} alt="" className={styles.imgTarget} />
                <div className={styles.overlay}>
                    <h2>PostgreSQL</h2>
                    <p className={styles.hiddenText}>
                        Base de datos relacional
                    </p>
                </div>
            </div>

            <div className={styles.target}>
                <img src={Django} alt="" className={styles.imgTarget} />
                <div className={styles.overlay}>
                    <h2>Django</h2>
                    <p className={styles.hiddenText}>
                        Framework backend en Python
                    </p>
                </div>
            </div>

            <div className={styles.target}>
                <img src={Mysql} alt="" className={styles.imgTarget} />
                <div className={styles.overlay}>
                    <h2>MySQL Workbench</h2>
                    <p className={styles.hiddenText}>
                        Gestión de bases de datos
                    </p>
                </div>
            </div>
        </motion.div>
    )}
</AnimatePresence>

                    <div className={styles.containerButton}>
                        <button
                            className={styles.btnToggle}
                            onClick={() => setShowMore(!showMore)}
                        >
                            <span className={styles.textBtn}>
                                {showMore ? "Ver menos" : "Ver más"}
                            </span>

                            <span className={`${styles.arrow} ${showMore ? styles.rotate : ""}`}>
                                ▼
                            </span>
                        </button>
                    </div>


                </section>
            </main>

            <Footer />
        </>
    );
};

export default Main;