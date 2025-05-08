import styles from './PersonalInfo.module.css'
import { TextInputLabeled } from '../Inputs/TextInputLabeled'
import { InputLabeled } from '../Inputs/InputLabeled'

export function PersonalInfo(){



    return(
        <div className={styles.personalInfoContainer}>
            <TextInputLabeled name='Name' placeHolder='John Doe' label='Complete Name'/>
            <InputLabeled placeHolder='99999-9999'   label='Phone Number' type='tel'/>
            <TextInputLabeled name='Mail' placeHolder='Email' label='Email'/>
            <TextInputLabeled name='Website' placeHolder='Portfolio.com' label='Website'/>
            <TextInputLabeled name='Nationality' placeHolder='Brazil' label='Nationality'/>
            <TextInputLabeled name='Address' placeHolder='City' label='Address'/>
        </div>
    )
    
    
    
    }