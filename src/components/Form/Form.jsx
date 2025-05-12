import React from "react";
import { Experience } from "../Sections/Experience";
import styles from './Form.module.css';
import { PersonalInfo } from "../Sections/PersonalInfo";
import { Education } from "../Sections/Education";

export  function Form() {
  

  
  return (
      <div className={styles.formContainer}>
              <form>
                <PersonalInfo/>
                <Education/>
                <Experience />
              </form>
      </div>
  )}
  