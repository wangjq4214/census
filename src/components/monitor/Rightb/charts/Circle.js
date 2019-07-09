import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';

export default function(props) {
  const { name, val } = props;
  const [options, setOptions] = useState({});
  useEffect(() => {
    if (val) {
      setOptions({
        color: ['#00eaff', 'rgba(0, 234, 255, 0.23)'],
        series: [{
          name: name,
          type: 'pie',
          radius: ['60%', '75%'],
          avoidLabelOverlap: false,
          hoverAnimation: false,
          label: {
            normal: {
              show: false,
              position: 'center',
              textStyle: {
                fontSize: 25,
                fontWeight: 'bold',
              },
              formatter: '{b}\n{c}%',
            },
          },
          data: [{
            value: val,
            name: name,
            label: {
              normal: {
                show: true,
              },
            },
          },
            {
              value: 100 - val,
              name: '',
            },
          ],
        }],
      });
    } else {
      setOptions({});
    }
  }, [name, val]);
  return (
    <div style={{ flex: '1' }}>
      <ReactEcharts
        option={options}
        style={{ width: '99%', height: '99%', padding: '1vh' }}
      />
    </div>
  );
}
