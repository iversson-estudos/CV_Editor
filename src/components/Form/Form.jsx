import React from "react";
import { Experience } from "../Sections/Experience";
import styles from './Form.module.css';
import { PersonalInfo } from "../Sections/PersonalInfo";
import { Education } from "../Sections/Education";

export  function Form({sendDataUp}) {
  

  
  return (
      <div className={styles.formContainer}>
              <form>
                <PersonalInfo sendDataUp={sendDataUp}/>
                <Education sendDataUp={sendDataUp}/>
                <Experience sendDataUp={sendDataUp}/>
              </form>
      </div>
  )}
  