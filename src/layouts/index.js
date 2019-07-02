import React from 'react';
import Link from 'umi/link';

import styles from './index.scss';
import buttonOneSelect from '../assets/button1_select.png';
import buttonOneUnselect from '../assets/button1_unselect.png';
import buttonTwoSelect from '../assets/button2_select.png';
import buttonTwoUnselect from '../assets/button2_unselect.png';
import buttonThreeSelect from '../assets/button3_select.png';
import buttonThreeUnselect from '../assets/button3_unselect.png';

const Tabs = [
  {
    to: '/',
    select: buttonOneSelect,
    unselect: buttonOneUnselect,
  },
  {
    to: '/monitor',
    select: buttonTwoSelect,
    unselect: buttonTwoUnselect,
  },
  {
    to: '/appeal',
    select: buttonThreeSelect,
    unselect: buttonThreeUnselect,
  },
];

function BasicLayout(props) {
  const {
    location: { pathname },
  } = props;

  return (
    <div className={styles.normal}>
      <div className={styles.navBar}>
        {Tabs.map(item => {
          return (
            <div key={item.to} className={styles.imgWarp}>
              <Link to={item.to}>
                <img src={item.to === pathname ? item.select : item.unselect} alt="img" />
              </Link>
            </div>
          );
        })}
      </div>
      {props.children}
    </div>
  );
}

export default BasicLayout;
