import { Form } from '../../components/Form/Form';
import {  Cv  } from '../../components/CV/Cv'
import styles from './App.module.css'


export default function App () {
  

       return (
        <div className={styles.appContainer}>
          <Form   />
          <Cv  />
        </div>
)}