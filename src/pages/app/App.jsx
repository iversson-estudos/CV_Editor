import { TextInput } from './../../components/TextInput';
import {TextLabeled} from './../../components/TextLabeled';
import styles from './App.module.css';

export default function App () {
       return (
       <div className={styles.appContainer}>
          <div className={styles.inputsContainer}>
              <form>
                <div className={styles.personalContainer}>
                  <TextInput  divClass={styles.name} name='name' label='Name' placeHolder='Enter your name' type='text' size={24} />
                </div>
                <div className={styles.experienceContainer}>
                    <TextLabeled divClass={styles.experience} name='experience' placeHolder='Past Experiences' label='Experience' size={80}/>
                    <TextLabeled divClass={styles.experience} name='experience' placeHolder='Company' label='Company' size={24} />
                </div>
              </form>
       </div>
      </div> 
)}