import React from "react";
import { useTranslation } from 'react-i18next';
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const { i18n } = useTranslation();

 
  const resumeUrl = i18n.language === 'en' 
    ? "assets/hero/Olha_Chumbash_resume_en.docx" 
    : "assets/hero/Olha_Chumbash_resume_ua.docx";

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Olha</h1>
        <p className={styles.description}>
          I'm a trainee full-stack developer with a strong enthusiasm for learning and growth. 
          I’m passionate about exploring new technologies and applying my skills to real-world projects.
        </p>
        <a 
          href={resumeUrl}  // Используем динамически изменяемый путь
          download 
          className={styles.contactBtn}
        >
          Download my Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
