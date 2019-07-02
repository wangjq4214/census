export function oneTopLeftOption(data) {
  return {
    series: [
      {
        name: '总计',
        type: 'pie',
        radius: ['15%', '50%'],
        data: data,
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
          fontSize: 30,
        },
      },
    ],
  };
}
