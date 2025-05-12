import styles from './Education.module.css'
import { TextInputLabeled } from '../Inputs/TextInputLabeled'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


export function Education(){



    return(
        <div className={styles.educationContainer}>
            <TextInputLabeled name='Course' placeHolder='Analytics...' label='Course'/>
            <TextInputLabeled name='School Name' placeHolder='University of Birmigham' label='School'/>
            <div className={styles.dateContainer}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker  label="From" />
                    <DatePicker  label="To"  />
                </LocalizationProvider>
            </div>   
        </div>)
    
    
    
    }