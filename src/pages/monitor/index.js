import React from 'react';
import Area from '@/components/appeal/Area';
import LeftTop from '@/components/monitor/LeftTop';

import styles from './index.scss';

export default function() {
  return (
    <div className={styles.container}>
      {/*<LeftTop/>*/}
      {/*<Area/>*/}
      <iframe src="http://175.6.46.236:8023/test1/2.html" frameBorder="0" className={styles.ifStyle}/>
    </div>
  );
}
