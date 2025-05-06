import {React} from "react";
import   { TextAreaLabeled } from "../Inputs/TextAreaLabeled";
import styles from './Experience.module.css';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDateTimePickerLayout } from "@mui/x-date-pickers";

export function Experience(){

return (
<div className={styles.experienceContainer}>
                    <TextAreaLabeled    divClass={styles.textArea} name='experience'  placeHolder='Past Experiences' label='Experience' size={80} />
                    <TextAreaLabeled    divClass={styles.textArea} name='company' placeHolder='Company' label='Company' size={24} />
                    <div className={styles.dateContainer}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker  label="From" />
                            <DatePicker  label="To" />
                        </LocalizationProvider>
                    </div>
</div>
)
}









