import React from "react";
import styles from './Cv.module.css'
import { PersonalInfo } from "./PersonalInfo";
import { Education } from "./Education";
import { Experience } from "./Experience";



export function Cv({data}) {
    return (
      <div className={styles.cvContainer}>
        <PersonalInfo data={data.personalInfo}/>
        <Education data={data.education}/>
        <Experience data={data.experience}/>
      </div>
    );
  }