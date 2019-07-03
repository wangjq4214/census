import React from 'react';
import DistributeEvent from './charts/distributeEvent';
import InTimeHandle from './charts/InTimeHandle';

import styles from './index.scss';

function OnlineTotal() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>办理案件统计</div>
      <DistributeEvent/>
      <InTimeHandle/>
    </div>
  );
}

export default OnlineTotal;
