import { Form } from '../../components/Form/Form';
import {  Cv  } from '../../components/CV/Cv'
import styles from './App.module.css'
import { useState } from 'react';


export default function App () {
  
  const [cvData, setCvData] = useState({
    name: "",
    experience: "", 
    company: ""  
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCvData(prev => ({
      ...prev,          
      [name]: value     
    }));
  };




       return (
        <div className={styles.appContainer}>
          <Form  handleChange={handleChange}   />
          <Cv value={cvData}/>
        </div>
)}