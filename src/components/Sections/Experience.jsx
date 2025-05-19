import {React,useState} from "react";
import   { TextAreaLabeled } from "../Inputs/TextAreaLabeled";
import { TextInputLabeled } from "../Inputs/TextInputLabeled"
import styles from './Experience.module.css';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ButtonWithSpan from '../ButtonWithSpan'



export function Experience({count=1, sendDataUp}){

/*SAVES INPUT VALUES*/    
const [experienceData,setExperienceData] = useState(
    [...Array(count)].map((_, i) => ({
        id: i,
        title: '',
        company: '',
        experience: '',
        dateFrom: null,
        dateTo: null
    })));


/*HANDLE CHANGES*/
const handleInputChange = (id, field, value) => {
   
    const updatedData = experienceData.map(item => 
    item.id === id ? { ...item, [field]: value } : item
  );

    setExperienceData(updatedData);

    sendDataUp('experience',updatedData);
};

const addNewDiv = () => {
    setExperienceData(prevValues => [
        ...prevValues,
        {
            id: prevValues.length,
            title: '',
            company: '',
            experience: '',
            dateFrom: null,
            dateTo: null
        }
    ]);
};





return (
    <>  
     <p className={styles.title}>Experience</p>
        {console.log(experienceData)}
        {experienceData.map((component) => (
            <ChildComponent key={component.id} data={component} handleInputChange={handleInputChange}/>
        ))}
        <div className={styles.addDivBtnContainer}>
            <ButtonWithSpan btnClass={styles.addDivBtn} text={'+'} onClick={addNewDiv}/>
        </div>
    </>
);  
}


/*CREATES CHILD COMPONENT*/
function ChildComponent ({data,handleInputChange}){
    console.log("Creating child n: "+data.id);
    return (  
           
            <div key={data.id} className={styles.experienceContainer}>
                                <TextInputLabeled     divClass={styles.textArea} name='title' placeHolder='eg: Web Developer...' label='Title' size={24} value={data.title} onChange={(e) => handleInputChange(data.id, e.target.name, e.target.value)}/>
                                <TextInputLabeled    divClass={styles.textArea} name='company' placeHolder='eg: Google, Apple...' label='Company' size={24} value={data.company} onChange={(e) => handleInputChange(data.id, e.target.name, e.target.value)}/>
                                <TextAreaLabeled    divClass={styles.textArea} name='experience'  placeHolder='I was responsible for...' label='Experience' size={80} value={data.experience} onChange={(e) => handleInputChange(data.id, e.target.name, e.target.value)}/>
                                <div className={styles.dateContainer}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker  label="From" name='dateFrom' value={data.dateFrom} onChange={(newValue) => handleInputChange(data.id, 'dateFrom', newValue)}/>
                                        <DatePicker  label="To" name='dateTo' value={data.dateTo} onChange={(newValue) => handleInputChange(data.id, 'dateTo', newValue)}/>
                                    </LocalizationProvider>
                                </div>
            </div>
            
    )}




