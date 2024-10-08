import React from "react";
import { useTranslation } from 'react-i18next';
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    const { t, i18n } = useTranslation();
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>{t('contact')}</h2>
                <p>{t('contact_description')}</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:olhachumbash@gmail.com">olhachumbash@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/linkedinIcon.png")}
                        alt="LinkedIn icon"
                    />
                    <a href="https://www.linkedin.com/in/olha-chumbash-597568269/" target="_blank">linkedin</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                    <a href="https://github.com/OlhaChumbash" target="_blank">Github</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/phone.png")} alt="Phone icon" />
                    <a href="tel:+4915174466630">+49 15 17 44 666 30</a>
                </li>
            </ul>
        </footer>
    );
};
