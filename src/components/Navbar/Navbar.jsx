import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const setLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                {t('portfolio')}
            </a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={
                        menuOpen
                            ? getImageUrl("nav/closeIcon.png")
                            : getImageUrl("nav/menuIcon.png")
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#about">{t('about')}</a>
                    </li>
                    <li>
                        <a href="#skills">{t('skills')}</a>
                    </li>
                    <li>
                        <a href="#projects">{t('projects')}</a>
                    </li>
                    <li>
                        <a href="#contact">{t('contact')}</a>
                    </li>
                    <li>
                        <div className={styles.languageSwitcher}>
                            <button
                                className={i18n.language === 'en' ? styles.activeLanguageButton : styles.languageButton}
                                onClick={() => setLanguage('en')}
                            >
                                EN
                            </button>
                            <button
                                className={i18n.language === 'ua' ? styles.activeLanguageButton : styles.languageButton}
                                onClick={() => setLanguage('ua')}
                            >
                                UA
                            </button>
                        </div>
                    </li>
                </ul>
            </div>

        </nav>
    );
};
