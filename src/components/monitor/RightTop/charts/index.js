import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';

function LeftTop(props) {
  const { hotEventDetail } = props;
  const [options, setOptions] = useState({});
  useEffect(() => {
    if (hotEventDetail) {
      setOptions({
        grid: {
          top: 5,
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}：<br/>{c}',
        },
        xAxis: {
          data: hotEventDetail.map(item => {
            return item.deptName;
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
          show: false,
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
            data: hotEventDetail.map(item => {
              return item.total;
            }),
          },
        ],
      });
    } else {
      setOptions({});
    }
  }, [hotEventDetail]);

  return (
    <div style={{ backgroundColor: 'rgba(0, 72, 179, 0.12)', border: 'solid 0.1vh #306bec' }}>
      <ReactEcharts
        option={options}
        style={{ width: '99%', height: '99%', padding: '1vh' }}
      />
    </div>
  );
}

export default connect(({ monitor }) => ({
  hotEventDetail: monitor.hotEventDetail,
}))(LeftTop);
