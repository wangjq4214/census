import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';

import styles from './OnLineEvent.scss';
import { OnLineEventColor } from '@/utils/chartColor';

function OnLineEvent(props) {
  const { onLineEvent } = props;
  const [options, setOptions] = useState({});
  useEffect(() => {
    if (onLineEvent) {
      setOptions({
        color: OnLineEventColor,
        tooltip: {
          trigger: 'item',
          formatter: '{b}：<br/>{c} ({d}%)',
        },
        series: [
          {
            name: '总计',
            type: 'pie',
            radius: ['15%', '50%'],
            data: onLineEvent,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
            label: {
              show: 'true',
              position: 'outside',
              formatter: '{b}\n{d}%',
              fontSize: 25,
            },
          },
        ],
      });
    } else {
      return setOptions({});
    }
  }, [onLineEvent]);
  const chartDetails = (e) => {
    props.dispatch({
      type: 'appeal/handleDetails',
      payload: {
        typeId: e.data.typeId,
      },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>各案件大类9区受理量分布</div>
      <div>
        <ReactEcharts
          option={options}
          style={{ width: '100%', height: '100%', padding: '1vh' }}
          onEvents={{ 'click': chartDetails }}
        />
      </div>
    </div>
  );
}

export default connect(({ appeal }) => ({
  onLineEvent: appeal.onLineEvent,
}))(OnLineEvent);
