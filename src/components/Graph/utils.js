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
