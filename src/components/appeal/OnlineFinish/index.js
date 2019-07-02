import React from 'react';
import OnLineEvent from './charts/OnLineEvent';
import Details from './charts/Details'
import Sky from './charts/Sky'

import styles from './index.scss';

function OnLineFinish() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>在线办结案件</div>
      <OnLineEvent/>
      <Details/>
      <Sky/>
    </div>
  );
}

export default OnLineFinish;
