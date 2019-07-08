import React from 'react';
import { connect } from 'dva';
import OnlineFinish from '@/components/appeal/OnlineFinish';
import Area from '@/components/appeal/Area';
import OnlineTotal from '@/components/appeal/OnlineTotal';

import styles from './index.scss';

class Appeal extends React.Component {
  times = null;

  componentDidMount() {
    this.props.dispatch({
      type: 'appeal/fetch',
    });
    this.times = setInterval(() => {
      this.props.dispatch({
        type: 'appeal/fetch',
      });
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.times);
  }

  render() {
    return (
      <div className={styles.container}>
        <OnlineFinish/>
        <Area/>
        <OnlineTotal/>
      </div>
    );
  }
}

export default connect()(Appeal);
