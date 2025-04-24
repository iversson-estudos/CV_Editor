import { TextInput } from './../../components/textInput';
import { useState } from 'react';
import styles from './App.module.css';

export default function App () {
       return (
       <div className={styles.appContainer}>
          <div className={styles.inputsContainer}>
          <form>
            <TextInput  name='name' label='Name' type='text' inputClass={styles.input}/>
          </form>
       </div>
      </div> 
)}