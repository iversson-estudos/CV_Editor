import { TextInput } from './../../components/textInput';
import styles from './App.module.css';

export default function App () {
       return (
       <div className={styles.appContainer}>
          <div className={styles.inputsContainer}>
          <form>
            <TextInput  name='name' label='Name' type='text' inputClass={styles.input}/>
            <TextInput name='experience' label='Experience' inputClass={styles.input} />
          </form>
       </div>
      </div> 
)}