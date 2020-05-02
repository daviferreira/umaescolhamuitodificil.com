const initialState = {
  cases: [2],
  deaths: [0],
  labels: ['2 de março'],
  totalCases: 2,
  totalDeaths: 0,
  videoId: null
};

const UPDATE_GRAPH_DATA = 'UPDATE_GRAPH_DATA';
const SET_VIDEO_ID = 'SET_VIDEO_ID';

export const updateGraphData = data => ({
  type: UPDATE_GRAPH_DATA,
  data: {
    data
  }
});

export const setVideoId = videoId => ({
  type: SET_VIDEO_ID,
  data: {
    videoId
  }
});

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GRAPH_DATA: {
      const { data } = action.data;

      const currentItem = data[data.length - 1];

      return {
        ...state,
        cases: [2, ...data.map(item => item.cases)],
        deaths: [0, ...data.map(item => item.deaths)],
        labels: ['2 de março', ...data.map(item => item.label)],
        totalCases: currentItem.cases,
        totalDeaths: currentItem.deaths
      };
    }

    case SET_VIDEO_ID: {
      const { videoId } = action.data;

      return {
        ...state,
        videoId
      };
    }

    default: {
      return state;
    }
  }
};
