import Button from '../../components/Button.jsx';
import { useState } from 'react';
import styles from './Homepage.module.css';
import App from '../app/App.jsx';  // ← Make sure this App doesn't import Homepage

export default function Homepage() {
  const [currentPage, setCurrentPage] = useState('homepage');

  return ( 
    <>
      {currentPage === 'homepage' && (
        <>
          <p className={styles.para}>Welcome to the CV App</p>
          <Button 
            btnClass={styles.btn}
            text='Lets Go'
            onClick={() => setCurrentPage('app')}
          />
        </>
      )}
      {currentPage === 'app' && <App />}  {/* ← This will now work */}
    </>
  );
}