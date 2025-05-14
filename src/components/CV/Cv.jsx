import React from "react";
import styles from './Cv.module.css'
import { PersonalInfo } from "./PersonalInfo";



export function Cv({data}) {
    return (
      <div className={styles.cvContainer}>
        <PersonalInfo data={data.personalInfo}/>
      </div>
    );
  }