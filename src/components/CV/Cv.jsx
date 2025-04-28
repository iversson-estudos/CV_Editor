import React from "react";
import styles from './Cv.module.css';



export  function Cv({text}) {
  return (
      <div className={styles.cvContainer}>
        <p>{text}</p>             
      </div>
  )}