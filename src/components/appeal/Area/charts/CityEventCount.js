import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';

import styles from './CityEventCount.scss';

function CityEventCount(props) {
  const { cityEventCount } = props;
  const [options, setOptions] = useState({});
  useEffect(() => {
    if (cityEventCount) {
      setOptions({
        grid: {
          top: 5,
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}：<br/>{c}',
        },
        xAxis: {
          data: cityEventCount.map(item => {
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
            show: false,
          },
          z: 10,
        },
        yAxis: {
          axisLine: {
            show: false,
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
                    { offset: 0, color: 'rgba(5,228,248,0.24)' },
                    { offset: 1, color: 'rgba(8,175,255,0.3)' },
                  ],
                ),
                barBorderRadius: 7.5,
              },
              emphasis: {
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
            data: cityEventCount.map(item => {
              return item.value;
            }),
          },
        ],
      });
    } else {
      setOptions({});
    }
  }, [cityEventCount]);

  return (
    <div>
      <ReactEcharts
        option={options}
        style={{ width: '99%', height: '99%', padding: '1vh' }}
      />
    </div>
  );
}

export default connect(({ appeal }) => ({
  cityEventCount: appeal.cityEventCount,
}))(CityEventCount);
