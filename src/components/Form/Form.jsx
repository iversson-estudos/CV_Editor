import React from "react";
import { TextInputLabeled } from '../Inputs/TextInputLabeled';
import { TextAreaLabeled } from '../Inputs/TextAreaLabeled';
import styles from './Form.module.css';

export function Form({}) {
  return (
      <div className={styles.inputsContainer}>
              <form>
                <div className={styles.personalContainer}>
                  <TextInputLabeled divClass={styles.name} name='name' label='Name' placeHolder='Enter your name' type='text' size={24} />
                </div>
                <div className={styles.experienceContainer}>
                    <TextAreaLabeled divClass={styles.experience} name='experience' placeHolder='Past Experiences' label='Experience' size={80} />
                    <TextAreaLabeled divClass={styles.experience} name='experience' placeHolder='Company' label='Company' size={24} />
                </div>
              </form>
      </div>
  )}
  