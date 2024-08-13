import React from "react";
import { useTranslation } from 'react-i18next';
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const { t, i18n } = useTranslation();


  const resumeUrl = i18n.language === 'en' 
    ? "assets/hero/Olha_Chumbash_resume_en.docx" 
    : "assets/hero/Olha_Chumbash_resume_ua.docx";

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t('hero_title')}</h1>
        <p className={styles.description}>
          {t('hero_description')}
        </p>
        <a 
          href={resumeUrl}  // Используем динамически изменяемый путь
          download 
          className={styles.contactBtn}
        >
          {t('hero_resume_button')}
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt={t('about_imageAlt')}
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
