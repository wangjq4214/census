import React from 'react';
import Total from './charts/Total';

import styles from './index.scss';

function Leftb() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>专席{new Date().getMonth() === 0 ? 12 : new Date().getMonth()}月受理业务量</div>
      <Total/>
    </div>
  );
}

export default Leftb;
