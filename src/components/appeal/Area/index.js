import React from 'react';
import Map from './charts/Map';
import CityEventCount from './charts/CityEventCount';

import styles from './index.scss';

function Area() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>事发区域数据统计</div>
      <Map/>
      <CityEventCount/>
    </div>
  );
}

export default Area;
