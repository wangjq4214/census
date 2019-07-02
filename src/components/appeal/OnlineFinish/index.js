import React from 'react';
import OnLineEvent from './charts/OnLineEvent';
import Details from './charts/Details';
import Sky from './charts/Sky';
import Business from './charts/Business'

import styles from './index.scss';

function OnLineFinish() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>在线办结案件</div>
      <OnLineEvent/>
      <Details/>
      <Sky/>
      <Business/>
    </div>
  );
}

export default OnLineFinish;
