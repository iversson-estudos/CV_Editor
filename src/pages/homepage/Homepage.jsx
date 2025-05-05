import  ButtonWithSpan from '../../components/ButtonWithSpan.jsx';
import { useState } from 'react';
import styles from './Homepage.module.css';
import App from '../app/App.jsx'; 


export default function Homepage() {
  const [currentPage, setCurrentPage] = useState('homepage');

  return ( 
    <>
      {currentPage === 'homepage' && (
      <div className={styles.homepageContainer}>
          <p className={styles.para}>Welcome to the CV App</p>
          <ButtonWithSpan 
            btnClass={styles.btn}
            text='Lets Go'
            onClick={() => setCurrentPage('app')}
            />
      </div>
      )}
      {currentPage === 'app' && <App />} 
    </>
  );
}