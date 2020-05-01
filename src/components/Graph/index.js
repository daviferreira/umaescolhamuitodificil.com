import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const Graph = () => {
  const [labels, setLabels] = useState([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ]);
  const [dataPoints, setDataPoints] = useState([
    { x: '2017-05-01', y: 65 },
    { x: '2017-05-02', y: 59 },
    { x: '2017-05-03', y: 80 },
    { x: '2017-05-04', y: 81 },
    { x: '2017-05-05', y: 56 },
    { x: '2017-05-06', y: 55 },
    { x: '2017-05-07', y: 40 }
  ]);

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 500 && !labels.includes('2017-05-31')) {
        setLabels([...labels, '2017-05-31']);
        setDataPoints([
          ...dataPoints,
          {
            x: '2017-05-31',
            y: 5000
          }
        ]);
      } else if (window.pageYOffset > 300 && !labels.includes('2017-05-16')) {
        setLabels([...labels, '2017-05-16']);
        setDataPoints([
          ...dataPoints,
          {
            x: '2017-05-16',
            y: 6060
          }
        ]);
      } else if (window.pageYOffset > 100 && !labels.includes('2017-05-15')) {
        setLabels([...labels, '2017-05-15']);
        setDataPoints([
          ...dataPoints,
          {
            x: '2017-05-15',
            y: 5550
          }
        ]);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []); // eslint-disable-line

  const data = {
    labels,
    datasets: [
      {
        label: 'Casos confirmados',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataPoints
      },
      {
        label: 'Óbitos',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'red',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataPoints.slice().reverse()
      }
    ]
  };

  const options = {
    scales: {
      xAxes: [
        {
          gridLines: {
            color: 'rgba(0, 0, 0, 0)'
          },
          display: false
        }
      ],
      yAxes: [
        {
          gridLines: {
            color: 'rgba(0, 0, 0, 0)'
          },
          display: false,
          ticks: {
            suggestedMin: 0,
            suggestedMax: 6000
          }
        }
      ]
    },
    legend: {
      display: false
    },
    animation: {
      duration: 300,
      easing: 'easeInQuad'
    },
    layout: {
      padding: {
        left: 24,
        right: 24,
        top: 24,
        bottom: 24
      }
    }
  };

  return <Line id="graph" key="graph" data={data} options={options} />;
};

export default Graph;
