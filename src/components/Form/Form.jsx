import React from "react";
import { Experience } from "../Sections/Experience";
import styles from './Form.module.css';
import { PersonalInfo } from "../Sections/PersonalInfo";

export  function Form() {
  

  
  return (
      <div className={styles.inputsContainer}>
              <form>
                <PersonalInfo/>
                <Experience />
              </form>
      </div>
  )}
  