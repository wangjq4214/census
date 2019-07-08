import React from 'react';
import { connect } from 'dva';
import classNames from 'classnames';
import Charts from './charts';

import styles from './index.scss';

function RightTop(props) {
  const { hotEvent, hotIndex } = props;

  const onChangeDetail = (index) => {
    props.dispatch({
      type: 'monitor/save',
      payload: {
        hotIndex: index,
      },
    });
    props.dispatch({
      type: 'monitor/handleHotEventDetail',
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>热点事件统计</div>
      <div className={styles.mainContainer}>
        <div className={styles.types}>
          {
            hotEvent.map((item) => {
              const cx = classNames({
                [styles.typeItem]: true,
                [styles.select]: item.typeId === hotIndex,
              });
              return (
                <div className={cx} key={item.caseName} onClick={() => onChangeDetail(item.typeId)}>
                  <div>{item.caseName}</div>
                  <div>{item.total}个来电</div>
                </div>
              );
            })
          }
        </div>
        <Charts/>
      </div>
    </div>
  );
}

export default connect(({ monitor }) => ({
  hotEvent: monitor.hotEvent,
  hotIndex: monitor.hotIndex,
}))(RightTop);
