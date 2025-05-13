import styles from './Education.module.css'
import { TextInputLabeled } from '../Inputs/TextInputLabeled'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useState } from 'react';


export function Education({sendDataUp}){

   const [educationData,setEducationData] = useState(
    {
        course:'',
        school:'',
        dateFrom:dayjs(),
        dateTo:dayjs()
    }
   );


   const handleChange = (field, value) => {
    const updatedData = {...educationData,[field]:value};
    setEducationData(updatedData);

    sendDataUp('education',updatedData);
};


    return(
        <div className={styles.educationContainer}>
            <TextInputLabeled name='Course' placeHolder='Analytics...' label='Course' onChange={(e) => handleChange("course", e.target.value)}  value={educationData.course}/>
            <TextInputLabeled name='School Name' placeHolder='University of Birmigham' label='School'onChange={(e) => handleChange("school", e.target.value)}  value={educationData.school}/>
            <div className={styles.dateContainer}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker  label="From" onChange={(newValue) => handleChange('dateFrom', newValue)}  value={educationData.dateFrom}/>
                    <DatePicker  label="To" onChange={(newValue) => handleChange('dateTo', newValue)}  value={educationData.dateTo} />
                </LocalizationProvider>
            </div>   
        </div>)
    
    
    
    }