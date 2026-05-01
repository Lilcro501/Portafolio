import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>

                <div className={styles.left}>
                    <p>2024 - 2026</p>
                    <p className={styles.copy}>
                        © 2026 Cristian Ortiz
                    </p>
                </div>

                <div className={styles.center}>
    <span className={styles.reference}>
        Referencia
        <a 
            href="https://mxb.dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.refLink}
        >
            mxb.dev
        </a>
    </span>
</div>

                <div className={styles.links}>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:tuemail@gmail.com">Email</a>
                </div>

            </div>
        </footer>
    );
}