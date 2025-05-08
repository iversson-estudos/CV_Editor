import {React, useState} from "react";
import { TextAreaLabeled } from "../Inputs/TextAreaLabeled";
import { TextInputLabeled } from "../Inputs/TextInputLabeled";
import styles from './Experience.module.css';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export function Experience({count = 1}) {
    const [xpDivValues, setXpDivValues] = useState(
        [...Array(count)].map((_, i) => ({
            id: i,
            title: '',
            company: '',
            experience: '',
            dateFrom: dayjs(),
            dateTo: dayjs()
          })));



    const handleInputChange = (id, field, value) => {
        setXpDivValues(prev => 
            prev.map(item => 
                item.id === id ? { ...item, [field]: value } : item
            )
        );
    };

    return (
        <>  
            {xpDivValues.map((component) => (
                <div key={component.id} className={styles.experienceContainer}>
                    <TextInputLabeled
                        divClass={styles.textArea}
                        name={`title-${component.id}`}
                        placeHolder='eg: Web Developer...'
                        onChange={(e) => handleInputChange(component.id, 'title', e.target.value)}
                        label='Title'
                        size={24}
                        value={component.title}
                    />
                    <TextInputLabeled
                        divClass={styles.textArea}
                        name={`company-${component.id}`}
                        placeHolder='eg: Google, Apple...'
                        label='Company'
                        size={24}
                        value={component.company}
                        onChange={(e) => handleInputChange(component.id, 'company', e.target.value)}
                    />
                    <TextAreaLabeled
                        divClass={styles.textArea}
                        name={`experience-${component.id}`}
                        placeHolder='I was responsible for...'
                        label='Experience'
                        size={80}
                        value={component.experience}
                        onChange={(e) => handleInputChange(component.id, 'experience', e.target.value)}
                    />
                    <div className={styles.dateContainer}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                onChange={(newValue) => handleInputChange(component.id, 'dateFrom', newValue)}
                                label="From"
                                value={component.dateFrom}
                            />
                            <DatePicker
                                onChange={(newValue) => handleInputChange(component.id, 'dateTo', newValue)}
                                label="To"
                                value={component.dateTo}
                            />
                        </LocalizationProvider>
                    </div>
                </div>
            ))}
        </>
    );
}