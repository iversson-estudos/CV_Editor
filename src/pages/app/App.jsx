import { TextInput } from './../../components/TextInput';
import {TextLabeled} from './../../components/TextLabeled';
import styles from './App.module.css';

export default function App () {
       return (
       <div className={styles.appContainer}>
          <div className={styles.inputsContainer}>
          <form>
            <TextInput  divClass={styles.name} name='name' label='Name' placeHolder='Enter your name' type='text' inputClass={styles.input}/>
            <div className={styles.experienceContainer}>
                <TextLabeled divClass={styles.experience} name='experience' placeHolder='Past Experiences' label='Experience' textClass={[styles.input,styles.inputBig].join(' ')} />
                <TextLabeled divClass={styles.experience} name='experience' placeHolder='Past Experiences' label='Experience' textClass={[styles.input,styles.inputBig].join(' ')} />
            </div>
          </form>
       </div>
      </div> 
)}