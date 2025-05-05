import React from "react";
import { TextInputLabeled } from '../Inputs/TextInputLabeled';
import styles from './Form.module.css';

export  function Form() {
  

  
  return (
      <div className={styles.inputsContainer}>
              <form>
                <div className={styles.personalContainer}>
                  <TextInputLabeled divClass={styles.name} name='name' label='Name' placeHolder='Enter your name' type='text' size={24} />
                </div>
              </form>
      </div>
  )}
  