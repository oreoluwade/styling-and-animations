import React from 'react';
import { Cross, Division, GreaterThan, Multiply } from '../../src/components';
import styles from './PathLines.module.scss';

const PathLines = () => {
  return (
    <div className={styles.root}>
      <div className={styles.box}>
        <Cross />
      </div>
      <div className={styles.box}>
        <Multiply />
      </div>
      <div className={styles.box}>
        <Division />
      </div>
      <div className={styles.box}>
        <GreaterThan />
      </div>
    </div>
  );
};

export default PathLines;
