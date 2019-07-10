import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';

import styles from './Sky.scss';
import { OnlineFinishBottom } from '@/utils/chartColor';

function Sky(props) {
  const { blueSkyCount } = props;
  const [options, setOptions] = useState({});
  useEffect(() => {
    if (blueSkyCount) {
      // 添加渐变色
      const temp = blueSkyCount.map((item, index) => {
        return {
          ...item,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: OnlineFinishBottom[index % OnlineFinishBottom.length],
            },
          },
        };
      });

      setOptions({
        tooltip: {
          trigger: 'item',
          formatter: '{b}：<br/>{c} ({d}%)',
        },
        series: [
          {
            name: '总计',
            type: 'pie',
            radius: ['40%', '50%'],
            data: temp,
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
              color: ['#6b3dff', '#be32d0', '#0281fe', '#0099f5'],
            },
          },
        ],
      });
    } else {
      setOptions({});
    }
  }, [blueSkyCount]);
  return (
    <div className={styles.container}>
      <div className={styles.title}>“蓝天保卫战”</div>
      <div>
        <ReactEcharts
          option={options}
          style={{ width: '99%', height: '99%', padding: '1vh' }}
        />
      </div>
    </div>
  );
}

export default connect(({ appeal }) => ({
  blueSkyCount: appeal.blueSkyCount,
}))(Sky);
