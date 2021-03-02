import React from 'react';
import styles from './RollingStone.module.scss';

const RollingStone = () => {
  return (
    <div className={styles.root}>
      <main className={styles.body}>
        <div className={styles.circle} />
      </main>
    </div>
  );
};

export default RollingStone;
