import React from "react";
import { useTranslation } from 'react-i18next';
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo },
}) => {
    const { i18n } = useTranslation(); 
    const currentLanguage = i18n.language;      
    const translatedTitle = title[currentLanguage] || title.en; 
    const translatedDescription = description[currentLanguage] || description.en; 


  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{translatedDescription}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}  target="_blank">
          Demo
        </a>
      
      </div>
    </div>
  );
};


