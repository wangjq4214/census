import React, { useState, useEffect } from 'react';
import echarts from 'echarts/lib/echarts';
import ReactEcharts from 'echarts-for-react';
import { connect } from 'dva';

import * as map from '@/utils/map.json';

let geos = {};
map.default.features.forEach(item => {
  const { name, center } = item.properties;
  geos[name] = center;
});

function Map(props) {
  const { inTimeHandle } = props;
  echarts.registerMap('changsha', map.default);
  const convertData = function(data) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      let geoCoord = geos[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value),
        });
      }
    }
    return res;
  };
  const [options, setOptions] = useState({});
  useEffect(() => {
    if (inTimeHandle.length === 0) {
      setOptions({
        tooltip: {
          trigger: 'item',
          formatter: function(params) {
            return params.name + ' : ' + params.value[2];
          },
        },
        visualMap: {
          min: 0,
          max: 200,
          calculable: true,
          inRange: {
            color: ['#1177b7', '#0eb6fc'],
          },
          textStyle: {
            color: '#fff',
          },
        },
        geo: {
          map: 'changsha',
          label: {
            emphasis: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              areaColor: '#171b50',
              borderColor: '#111',
            },
            emphasis: {
              areaColor: '#707caa',
            },
          },
        },
        series: [
          {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(inTimeHandle),
            symbolSize: 12,
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
              },
            },
            itemStyle: {
              emphasis: {
                borderColor: '#fff',
                borderWidth: 1,
              },
            },
          },
        ],

      });
    } else {
      setOptions({});
    }
  }, [inTimeHandle]);
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
  inTimeHandle: appeal.inTimeHandle,
}))(Map);
