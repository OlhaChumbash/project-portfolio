import React from "react";
import { useTranslation } from 'react-i18next';
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{t('about')}</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt={t('about_imageAlt')}
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt={t('about_cursorIconAlt')} />
            <div className={styles.aboutItemText}>
              <h3>{t('about_frontendDeveloperTitle')}</h3>
              <p>{t('about_frontendDeveloperDescription')}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt={t('about_serverIconAlt')} />
            <div className={styles.aboutItemText}>
              <h3>{t('about_backendDeveloperTitle')}</h3>
              <p>{t('about_backendDeveloperDescription')}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt={t('about_uiIconAlt')} />
            <div className={styles.aboutItemText}>
              <h3>{t('about_uiDesignerTitle')}</h3>
              <p>{t('about_uiDesignerDescription')}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
