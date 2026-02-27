// components/Scroller.js
// components/Scroller.js
import React from 'react';
import styles from '../styles/Scroller.module.css';

const Scroller = ({ children }) => {
  return (
    <div className={styles.scrollable}>
      {children}
    </div>
  );
};

export default Scroller;
