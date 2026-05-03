import React from "react";
import "../../../App.css";
import styles from "./Header.module.css";
import IconProfile from "../../../assets/Img/9fa7d93c-203f-47b0-b99d-2b50d3903caa.jpg";
import Iconverifiqued from "../../../assets/Icons/verificado.png";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className={styles.header}>
            <section className={styles.profile}>
                <img src={IconProfile} alt="" className={styles.IconProfile} />

                <p className={styles.nameProfile}>Cristian Ortiz</p>
                <img src={Iconverifiqued} alt="" className={styles.IconVerifiqued} />
            </section>

            <nav className={styles.navigation}>
                {/* HOME */}
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        `${styles.sectionLink} ${isActive ? styles.active : ""}`
                    }
                >
                    <span className={styles.number}>01</span>
                    <span className={styles.text}>Home</span>
                </NavLink>

                {/* DESARROLLOS */}
                <NavLink
                    to="/Desarrollos"
                    className={({ isActive }) =>
                        `${styles.sectionLink} ${isActive ? styles.active : ""}`
                    }
                >
                    <span className={styles.number}>02</span>
                    <span className={styles.text}>Desarrollos</span>
                </NavLink>

                {/* SOBRE MI */}
                <NavLink
                    to="/sobre-mi"
                    className={({ isActive }) =>
                        `${styles.sectionLink} ${isActive ? styles.active : ""}`
                    }
                >
                    <span className={styles.number}>03</span>
                    <span className={styles.text}>Sobre mi</span>
                </NavLink>

                {/* MAS INFO */}
                <NavLink
                    to="/mas-info"
                    className={({ isActive }) =>
                        `${styles.sectionLink} ${isActive ? styles.active : ""}`
                    }
                >
                    <span className={styles.number}>04</span>
                    <span className={styles.text}>Mas informacion</span>
                </NavLink>
            </nav>
        </header>
    );
}