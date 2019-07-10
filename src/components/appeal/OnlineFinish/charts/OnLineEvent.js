import React from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';

import styles from './OnLineEvent.scss';
import { OnLineEventColor } from '@/utils/chartColor';

class OnLineEvent extends React.Component {
  get options() {
    const { onLineEvent } = this.props;
    if (onLineEvent) {
      return {
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
      };
    } else {
      return {};
    }
  }

  chartDetails = e => {
    this.props.dispatch({
      type: 'appeal/handleDetails',
      payload: {
        typeId: e.data.typeId,
      },
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>各案件大类9区受理量分布</div>
        <div>
          <ReactEcharts
            option={this.options}
            style={{ width: '99%', height: '99%', padding: '1vh' }}
            onEvents={{ click: this.chartDetails }}
          />
        </div>
      </div>
    );
  }
}

export default connect(({ appeal }) => ({
  onLineEvent: appeal.onLineEvent,
}))(OnLineEvent);
