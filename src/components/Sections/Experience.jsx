import {React,useState} from "react";
import   { TextAreaLabeled } from "../Inputs/TextAreaLabeled";
import { TextInputLabeled } from "../Inputs/TextInputLabeled"
import styles from './Experience.module.css';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export function Experience(count=1){

/*SAVES INPUT VALUES*/    
const [xpDivValues,setXpDivValues] = useState(Array(count).fill(''));

/*HANDLES TEXT CHANGE*/







/*CREATES COMPONENTS BASED ON COUNT */
const childComponents = xpDivValues.map((index,name,value)=>{





})
return (
<div className={styles.experienceContainer}>
                    <TextInputLabeled    divClass={styles.textArea} name='title' placeHolder='eg: Web Developer...' label='Title' size={24} />
                    <TextInputLabeled    divClass={styles.textArea} name='company' placeHolder='eg: Google, Apple...' label='Company' size={24} />
                    <TextAreaLabeled    divClass={styles.textArea} name='experience'  placeHolder='I was responsible for...' label='Experience' size={80} />
                    <div className={styles.dateContainer}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker  label="From" />
                            <DatePicker  label="To" />
                        </LocalizationProvider>
                    </div>
</div>
)








}









