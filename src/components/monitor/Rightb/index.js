import React from 'react';
import PhoneState from './charts/PhoneState';

import styles from './index.scss';

function Rightb() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>坐席数据统计</div>
      <div className={styles.mainContainer}>
        <PhoneState/>
      </div>
    </div>
  );
}

export default Rightb;
