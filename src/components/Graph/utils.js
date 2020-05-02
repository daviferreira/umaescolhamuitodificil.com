export const getDataOptions = ({ color }) => ({
  pointRadius: 0
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
    easing: 'linear'
  },
  layout: {
    padding:
      typeof window !== `undefined` && window.innerWidth < 768
        ? {}
        : {
            left: 24,
            right: 24,
            top: 24,
            bottom: 24
          }
  },
  tooltips: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    bodyFontColor: '#fff',
    bodyFontSize: 13,
    caretSize: 3,
    cornerRadius: 2,
    displayColors: false,
    fontFamily: `'Open Sans', sans-serif`,
    titleFontColor: '#fff',
    titleFontFamily: `'Open Sans', sans-serif`,
    titleFontSize: 13,
    xPadding: 16,
    yPadding: 16
  }
});
