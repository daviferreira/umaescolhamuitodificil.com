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
  data
});

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GRAPH_DATA: {
      const { cases, deaths, label } = action.data;

      return {
        ...state,
        cases: [...state.cases, cases],
        currentDate: label,
        deaths: [...state.deaths, deaths],
        labels: [...state.labels, label],
        totalCases: state.totalCases + cases,
        totalDeaths: state.totalDeaths + deaths
      };
    }

    default: {
      return state;
    }
  }
};
