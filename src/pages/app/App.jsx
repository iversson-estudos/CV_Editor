import { useState } from 'react';
import styles from './App.module.css';

export default function App () {
       return (
       <div className={styles.inputsContainer}>
          <div>
            <label>NAME</label>
            <input type="text" />
          </div>
       </div>
)}