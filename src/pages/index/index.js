import React from 'react';

import styles from './index.css';


export default function() {
  return (
    <div className={styles.normal}>
      {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
      <iframe src="http://175.6.46.236:8023/test1/1.html" frameborder="0" className={styles.ifStyle}/>
    </div>
  );
}
