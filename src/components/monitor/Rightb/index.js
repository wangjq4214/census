import React from 'react';
import PhoneState from './charts/PhoneState';
import Circle from './charts/Circle';
import { connect } from 'dva';

import styles from './index.scss';

function Rightb(props) {
  const { historyVdn } = props;
  return (
    <div className={styles.container}>
      <div className={styles.title}>坐席数据统计</div>
      <div className={styles.mainContainer}>
        <PhoneState/>
        <div className={styles.circle}>
          <Circle name={'总接通率'} val={historyVdn[0].val}/>
          <Circle name={'总放弃率'} val={historyVdn[1].val}/>
        </div>
      </div>
    </div>
  );
}

export default connect(({ monitor }) => ({
  historyVdn: monitor.historyVdn,
}))(Rightb);
