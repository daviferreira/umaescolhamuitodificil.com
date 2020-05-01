export const getDataOptions = ({ color }) => ({
  fill: false,
  lineTension: 0.1,
  backgroundColor: 'rgba(75,192,192,0)',
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBorderColor: 'rgba(75,192,192,0)',
  pointBackgroundColor: color,
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: color,
  pointHoverBorderColor: 'rgba(220,220,220,0)',
  pointHoverBorderWidth: 2,
  pointRadius: 6,
  pointHitRadius: 10
});

export const getOptions = ({ suggestedMax }) => ({
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
          suggestedMax
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
});
