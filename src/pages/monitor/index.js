import React from 'react';
import { connect } from 'dva';
import Area from '@/components/appeal/Area';
import LeftTop from '@/components/monitor/LeftTop';
import RightTop from '@/components/monitor/RightTop';
import Rightb from '@/components/monitor/Rightb';
import Leftb from '@/components/monitor/Leftb';

import styles from './index.scss';

class Monitor extends React.Component {
  times = null;

  componentDidMount() {
    this.props.dispatch({
      type: 'appeal/fetch',
    });
    this.props.dispatch({
      type: 'monitor/fetch',
    });
    this.times = setInterval(() => {
      this.props.dispatch({
        type: 'appeal/fetch',
      });
      this.props.dispatch({
        type: 'monitor/fetch',
      });
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.times);
  }

  render() {
    return (
      <div className={styles.container}>
        <LeftTop/>
        <Area/>
        <RightTop/>
        <Rightb/>
        <Leftb/>
        {/*<iframe src="http://175.6.46.236:8023/test1/2.html" frameBorder="0" className={styles.ifStyle}/>*/}
      </div>
    );
  }
}

export default connect()(Monitor);
