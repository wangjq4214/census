import React from 'react';
import OnlineFinish from '@/components/appeal/OnlineFinish';
import Area from '@/components/appeal/Area';
import OnlineTotal from '@/components/appeal/OnlineTotal';

import styles from './index.scss';

function Appeal() {
  return (
    <div className={styles.container}>
      <OnlineFinish/>
      <Area/>
      <OnlineTotal/>
    </div>
  );
}

export default Appeal;
