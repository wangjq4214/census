import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';

function Total(props) {
  const { caseTypeCount } = props;
  const [options, setOptions] = useState({});

  useEffect(() => {
    if (caseTypeCount) {
      setOptions({
        grid: {
          top: 5,
          left: '20%',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}：<br/>{c}',
        },
        yAxis: {
          data: caseTypeCount.map(item => {
            return item.name;
          }),
          axisLabel: {
            rotate: 45,
            textStyle: {
              color: 'rgba(116,218,234,0.47)',
            },
            fontSize: 20,
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
        xAxis: {
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
                    { offset: 0, color: '#fdda15' },
                    { offset: 1, color: '#f58a01' },
                  ],
                ),
                barBorderRadius: 7.5,
              },
            },
            barWidth: 15,
            data: caseTypeCount.map(item => {
              return item.value;
            }),
          },
        ],
      });
    } else {
      setOptions({});
    }
  }, [caseTypeCount]);
  return (
    <div>
      <ReactEcharts
        option={options}
        style={{ width: '99%', height: '99%', padding: '1vh' }}
      />
    </div>
  );
}

export default connect(({ monitor }) => ({
  caseTypeCount: monitor.caseTypeCount,
}))(Total);
