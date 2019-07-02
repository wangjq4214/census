import React, { useState, useEffect } from 'react';
import { connect } from 'dva';

import styles from './Details.scss';
import ReactEcharts from 'echarts-for-react';
import { OnLineEventColor } from '@/utils/chartColor';

function Details(props) {
  const { areaEventDetail } = props;
  const [options, setOptions] = useState({});
  useEffect(() => {
    if (areaEventDetail) {
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
            data: areaEventDetail,
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
              fontSize: 30,
            },
          },
        ],
      });
    } else {
      setOptions({});
    }
  }, [areaEventDetail]);
  return (
    <div className={styles.container}>
      <div className={styles.title}>区县事件详细情况</div>
      <div>
        <ReactEcharts
          option={options}
          style={{ width: '100%', height: '99%', padding: '1vh' }}
        />
      </div>
    </div>
  );
}

export default connect(({ appeal }) => ({
  areaEventDetail: appeal.areaEventDetail,
}))(Details);
