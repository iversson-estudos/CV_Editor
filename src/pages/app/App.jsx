import { TextInput } from './../../components/TextInput';
import {TextLabeled} from './../../components/TextLabeled';
import styles from './App.module.css';

export default function App () {
       return (
       <div className={styles.appContainer}>
          <div className={styles.inputsContainer}>
          <form>
            <TextInput  divClass={styles.name} name='name' label='Name' placeHolder='Enter your name' type='text' />
            <div className={styles.experienceContainer}>
                <TextLabeled divClass={styles.experience} name='experience' placeHolder='Past Experiences' label='Experience' size={80}/>
                <TextLabeled divClass={styles.experience} name='experience' placeHolder='Company' label='Company'  />
            </div>
          </form>
       </div>
      </div> 
)}