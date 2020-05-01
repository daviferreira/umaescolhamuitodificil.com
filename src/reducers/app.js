const initialState = {
  cases: [2],
  currentDate: '2 de março',
  deaths: [0],
  labels: ['2 de março'],
  totalCases: 2,
  totalDeaths: 0
};

const UPDATE_GRAPH_DATA = 'UPDATE_GRAPH_DATA';

export const updateGraphData = data => ({
  type: UPDATE_GRAPH_DATA,
  data: {
    data
  }
});

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GRAPH_DATA: {
      const { data } = action.data;

      const totals = {
        cases: 2,
        deaths: 0
      };

      data.forEach(item => {
        totals.cases += item.cases;
        totals.deaths += item.deaths;
      });

      return {
        ...state,
        cases: [2, ...data.map(item => item.cases)],
        currentDate: data[data.length - 1].label,
        deaths: [0, ...data.map(item => item.deaths)],
        labels: ['2 de março', ...data.map(item => item.label)],
        totalCases: totals.cases,
        totalDeaths: totals.deaths
      };
    }

    default: {
      return state;
    }
  }
};
