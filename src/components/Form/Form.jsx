import {React, useState} from "react";
import { TextInputLabeled } from '../Inputs/TextInputLabeled';
import { TextAreaLabeled } from '../Inputs/TextAreaLabeled';
import styles from './Form.module.css';

export  function Form({handleChange}) {
  
  const [numberOfDivs,setNumberOfDivs] = useState(1);

  const incrementDivs = () =>{
    console.log('incrementing by 1');
    setNumberOfDivs(prev=>prev+1);
  }




  return (
      <div className={styles.inputsContainer}>
              <form>
                <div className={styles.personalContainer}>
                  <TextInputLabeled setCount={incrementDivs} count={numberOfDivs} handleChange={handleChange} divClass={styles.name} name='name' label='Name' placeHolder='Enter your name' type='text' size={24} />
                </div>
                <div className={styles.experienceContainer}>
                    <TextAreaLabeled handleChange={handleChange} divClass={styles.experience} name='experience' placeHolder='Past Experiences' label='Experience' size={80} />
                    <TextAreaLabeled handleChange={handleChange} divClass={styles.experience} name='company' placeHolder='Company' label='Company' size={24} />
                </div>
              </form>
      </div>
  )}
  