import React from 'react';
import styles from './spinner.module.scss';
const Spinner = () => {
  return (
    <div className={styles['lds-ring']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Spinner;
