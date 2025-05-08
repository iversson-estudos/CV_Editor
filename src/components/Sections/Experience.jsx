import {React,useState} from "react";
import   { TextAreaLabeled } from "../Inputs/TextAreaLabeled";
import { TextInputLabeled } from "../Inputs/TextInputLabeled"
import styles from './Experience.module.css';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import ButtonWithSpan from '../ButtonWithSpan'



export function Experience({count=1}){

/*SAVES INPUT VALUES*/    
const [xpDivValues,setXpDivValues] = useState(
    [...Array(count)].map((_, i) => ({
        id: i,
        title: '',
        company: '',
        experience: '',
        dateFrom: dayjs(),
        dateTo: dayjs()
    })));

/*HANDLE CHANGES*/
const handleInputChange = (id, field, value) => {
    setXpDivValues(prev => 
        prev.map(item => 
            item.id === id ? { ...item, [field]: value } : item
        )
    );
    console.log("Changing value of "+field+" index "+id+" to "+value);
};

const addNewDiv = () => {
    setXpDivValues(prevValues => [
        ...prevValues,
        {
            id: prevValues.length,
            title: '',
            company: '',
            experience: '',
            dateFrom: dayjs(),
            dateTo: dayjs()
        }
    ]);
};





return (
    <>  
    {console.log(xpDivValues)}
        {xpDivValues.map((component) => (
            <ChildComponent key={component.id} data={component} handleInputChange={handleInputChange}/>
        ))}
        <ButtonWithSpan btnClass={styles.addDivBtn} text={'+'} onClick={addNewDiv}/>
    </>
);  
}


/*CREATES CHILD COMPONENT*/
function ChildComponent ({data,handleInputChange}){
    console.log("Creating child n: "+data.id);
    return (    
            <div key={data.id} className={styles.experienceContainer}>
                                <TextInputLabeled     divClass={styles.textArea} name='title' placeHolder='eg: Web Developer...' label='Title' size={24} value={data.title} onChange={(e) => handleInputChange(data.id, 'title', e.target.value)}/>
                                <TextInputLabeled    divClass={styles.textArea} name='company' placeHolder='eg: Google, Apple...' label='Company' size={24} value={data.company} onChange={(e) => handleInputChange(data.id, 'company', e.target.value)}/>
                                <TextAreaLabeled    divClass={styles.textArea} name='experience'  placeHolder='I was responsible for...' label='Experience' size={80} value={data.experience} onChange={(e) => handleInputChange(data.id, 'experience', e.target.value)}/>
                                <div className={styles.dateContainer}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker  label="From" value={data.dateFrom} onChange={(newValue) => handleInputChange(data.id, 'dateFrom', newValue)}/>
                                        <DatePicker  label="To" value={data.dateTo} onChange={(newValue) => handleInputChange(data.id, 'dateTo', newValue)}/>
                                    </LocalizationProvider>
                                </div>
            </div>
    )}




