import {React,useState} from "react";
import   { TextAreaLabeled } from "../Inputs/TextAreaLabeled";
import { TextInputLabeled } from "../Inputs/TextInputLabeled"
import styles from './Experience.module.css';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';



export function Experience(count=1){

/*SAVES INPUT VALUES*/    
const [xpDivValues,setXpDivValues] = useState(Array(count).fill(
    {
        title:'A',
        company:'',
        experience:'A',
        dateFrom:dayjs(),
        dateTo:dayjs()
    }
));



return (
    <>  
        {xpDivValues.map((component, index) => (
            <ChildComponent key={index} data={component} />
        ))}
    </>
);  







}







/*CREATES CHILD COMPONENT*/
function ChildComponent ({data}){
    return (    
            <div className={styles.experienceContainer}>
                                <TextInputLabeled     divClass={styles.textArea} name='title' placeHolder='eg: Web Developer...' label='Title' size={24} value={data.title}/>
                                <TextInputLabeled    divClass={styles.textArea} name='company' placeHolder='eg: Google, Apple...' label='Company' size={24} value={data.company}/>
                                <TextAreaLabeled    divClass={styles.textArea} name='experience'  placeHolder='I was responsible for...' label='Experience' size={80} value={data.experience}/>
                                <div className={styles.dateContainer}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker  label="From" value={data.dateFrom}/>
                                        <DatePicker  label="To" value={data.dateTo}/>
                                    </LocalizationProvider>
                                </div>
            </div>
    )}



