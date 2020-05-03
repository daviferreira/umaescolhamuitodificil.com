import animateScrollTo from 'animated-scroll-to';

const windowObject = typeof window !== `undefined` ? window : {};

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
  pointHoverRadius: 7,
  pointHoverBackgroundColor: color,
  pointHoverBorderColor: 'rgba(220,220,220,0)',
  pointHoverBorderWidth: 2,
  pointRadius: windowObject.innerWidth < 768 ? 0 : 4,
  pointHitRadius: 24
});

export const getOptions = ({ edges, suggestedMax }) => ({
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
      windowObject.innerWidth < 768
        ? {}
        : {
            left: 24,
            right: 24,
            top: 24,
            bottom: 24
          }
  },
  hover: {
    animationDuration: 0
  },
  tooltips: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    bodyAlign: 'left',
    bodyFontColor: '#fff',
    bodyFontFamily: `'Open Sans', sans-serif`,
    bodyFontSize: 13,
    bodySpacing: 10,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    callbacks: {
      label(tooltipItem, data) {
        return ` ${tooltipItem.yLabel
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ${
          tooltipItem.datasetIndex === 0 ? 'casos' : 'mortes'
        }`;
      }
    },
    caretPadding: 2,
    caretSize: 2,
    cornerRadius: 2,
    custom: null,
    displayColors: true,
    enabled: true,
    intersect: true,
    mode: 'index',
    position: 'average',
    titleAlign: 'left',
    titleFontColor: 'rgba(255, 255, 255, 0.7)',
    titleFontFamily: `'Open Sans', sans-serif`,
    titleFontSize: 13,
    titleFontStyle: 'bold',
    titleMarginBottom: 16,
    titleSpacing: 12,
    xPadding: 16,
    yPadding: 16
  },
  onClick(event, elements) {
    if (windowObject.innerWidth < 768 || !elements || !elements[0]) {
      return;
    }

    const quote = edges[elements[0]._index - 1];

    quote &&
      animateScrollTo(document.querySelector(`[data-date="${quote.date}"]`), {
        maxDuration: 1000,
        speed: 300
      });
  }
});
