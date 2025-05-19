import styles from './PersonalInfo.module.css'
import { TextInputLabeled } from '../Inputs/TextInputLabeled'
import { InputLabeled } from '../Inputs/InputLabeled'
import { useState } from 'react';

export function PersonalInfo({sendDataUp}){

const [personalData,setPersonalData] = useState(
    {
        name:'',
        phone:'',
        mail:'',
        website:'',
        nationality:'',
        address:''
    }
   );

   const handleChange = (field,value)=>{
    const updatedData = {...personalData,[field]:value};
    setPersonalData(updatedData);

    sendDataUp('personalInfo',updatedData);
   }







    return(
        <div className={styles.personalInfoContainer}>
            <p className={styles.title}>Personal Info</p>
            <TextInputLabeled name='name' placeHolder='John Doe' label='Complete Name' value={personalData.name} onChange={(e)=>handleChange('name',e.target.value)}/>
            <InputLabeled name='phone' placeHolder='99999-9999'   label='Phone Number' type='tel' value={personalData.phone} onChange={(e)=>handleChange(e.target.name,e.target.value)}/>
            <TextInputLabeled name='mail' placeHolder='John.Doe@....' label='Mail' value={personalData.mail} onChange={(e)=>handleChange(e.target.name,e.target.value)}/>
            <TextInputLabeled name='website' placeHolder='Portfolio.com' label='Website' value={personalData.website} onChange={(e)=>handleChange(e.target.name,e.target.value)}/>
            <TextInputLabeled name='nationality' placeHolder='Brazil' label='Nationality' value={personalData.nationality} onChange={(e)=>handleChange(e.target.name,e.target.value)}/>
            <TextInputLabeled name='address' placeHolder='City' label='Address' value={personalData.address} onChange={(e)=>handleChange(e.target.name,e.target.value)}/>
        </div>
    )
    
    
    
    }