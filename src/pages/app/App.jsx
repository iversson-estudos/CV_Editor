import { Form } from '../../components/Form/Form';
import {  Cv  } from '../../components/CV/Cv'
import styles from './App.module.css'
import { useState } from 'react';


export default function App () {
  
     const [cvData,setCvData] = useState({
      personalInfo:'',
      education:'',
      experience:''
     });

     const sendDataUp = (field,value)=>{
      let updatedValues = {...cvData};
      updatedValues[field]=value;
      setCvData(updatedValues);
      
      console.log(updatedValues);
     }



       return (
        <div className={styles.appContainer}>
          <Form  sendDataUp={sendDataUp} />
          <Cv data={cvData}/>
        </div>
)}