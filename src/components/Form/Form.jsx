import React from "react";
import { Experience } from "../Sections/Experience";
import styles from './Form.module.css';

export  function Form() {
  

  
  return (
      <div className={styles.inputsContainer}>
              <form>
                <Experience />
              </form>
      </div>
  )}
  