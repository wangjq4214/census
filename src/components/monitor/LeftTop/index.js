import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';

import styles from './index.scss';

function LeftTop(props) {
  const { onLineEvent } = props;
  const [options, setOptions] = useState({});
  useEffect(() => {
    if (onLineEvent) {
      setOptions({
        grid: {
          top: 5,
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}：<br/>{c}',
        },
        xAxis: {
          data: onLineEvent.map(item => {
            return item.name;
          }),
          axisLabel: {
            rotate: 45,
            textStyle: {
              color: 'rgba(116,218,234,0.47)',
            },
            fontSize: 25,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: '#00204a',
              width: 3,
            },
          },
          z: 10,
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#00204a',
              width: 3,
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: '#03c9db',
              fontSize: 25,
            },
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            type: 'bar',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#06e4f9' },
                    { offset: 1, color: '#08afff' },
                  ],
                ),
                barBorderRadius: 7.5,
              },
            },
            barWidth: 15,
            data: onLineEvent.map(item => {
              return item.value;
            }),
          },
        ],
      });
    } else {
      setOptions({});
    }
  }, [onLineEvent]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>在线办结案件</div>
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
  onLineEvent: appeal.onLineEvent,
}))(LeftTop);
