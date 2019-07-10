import React from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';

import { phoneState } from '@/utils/config';

const makeSer = (data) => {
  let temp = [];
  for (let key in data) {
    temp.push({
      name: phoneState[key],
      type: 'line',
      data: data[key].slice(-6),
      smooth: true,
      label: {
        show: true,
        position: 'right',
      },
    });
  }
  return temp;
};

class PhoneState extends React.Component {
  get options() {
    const { phoneState } = this.props;
    return {
      legend: {
        data: ['示闲', '示忙', '通话', '事后', '等待'],
        textStyle: {
          color: '#ffffff'
        },
      },
      color: ['#f6504a', '#2fd55a', '#b34fff', '#4a3eff', '#f18be9'],
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: '#00204a',
            width: 3,
          },
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: 'rgba(116,218,234,0.47)',
          },
          fontSize: 25,
        },
        axisLine: {
          lineStyle: {
            color: '#00204a',
            width: 3,
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
      series: makeSer(phoneState),
    };
  }

  render() {
    return (
      <div>
        <ReactEcharts
          option={this.options}
          style={{ width: '99%', height: '99%', padding: '1vh' }}
        />
      </div>
    );
  }
}

export default connect(({ monitor }) => ({
  phoneState: monitor.phoneState,
}))(PhoneState);
