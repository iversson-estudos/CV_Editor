import  Button  from '../../components/Button.jsx';
import React from 'react';
import styles from './Homepage.module.css';

export default function Homepage(){
return(
<>
<p className={styles.para}>Welcome to the CV App</p>
<Button btnClass={styles.btn} text='Lets Go'/>
</>
)}