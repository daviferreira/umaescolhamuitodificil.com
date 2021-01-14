import store from 'storejs';

const initialState = {
  cases: [2],
  currentDate: '2020-03-02',
  currentFormattedDate: '2 de março',
  deaths: [0],
  labels: ['2 de março'],
  lastLoadedDate: '2020-03-02',
  nextQuoteId: null,
  previousQuoteId: null,
  showGraph: store.get('show_graph') !== false,
  totalCases: 2,
  totalDeaths: 0,
  url: null,
  videoId: null
};

const UPDATE_CURRENT_DATA = 'UPDATE_CURRENT_DATA';
const UPDATE_GRAPH_DATA = 'UPDATE_GRAPH_DATA';
const SET_VIDEO_ID = 'SET_VIDEO_ID';
const TOGGLE_GRAPH = 'TOGGLE_GRAPH';

export const updateCurrentData = data => ({
  type: UPDATE_CURRENT_DATA,
  data: {
    data
  }
});

export const updateGraphData = ({
  currentData,
  data,
  nextQuoteId,
  previousQuoteId
}) => ({
  type: UPDATE_GRAPH_DATA,
  data: {
    currentData,
    data,
    nextQuoteId,
    previousQuoteId
  }
});

export const setVideoId = videoId => ({
  type: SET_VIDEO_ID,
  data: {
    videoId
  }
});

export const toggleGraph = () => ({
  type: TOGGLE_GRAPH
});

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GRAPH_DATA: {
      const { data, currentData, nextQuoteId, previousQuoteId } = action.data;

      return {
        ...state,
        cases: [2, ...data.map(item => item.cases)],
        currentDate: currentData.date,
        currentFormattedDate: currentData.formattedDate,
        currentVideoId: currentData.videoId,
        deaths: [0, ...data.map(item => item.deaths)],
        labels: ['2 de março', ...data.map(item => item.formattedDate)],
        lastLoadedDate: currentData.date,
        nextQuoteId,
        previousQuoteId,
        totalCases: currentData.cases,
        totalDeaths: currentData.deaths,
        url: currentData.url
      };
    }

    case UPDATE_CURRENT_DATA: {
      const {
        data: {
          date,
          formattedDate,
          nextQuoteId,
          previousQuoteId,
          url,
          videoId
        }
      } = action.data;

      return {
        ...state,
        currentDate: date,
        currentFormattedDate: formattedDate,
        currentVideoId: videoId,
        nextQuoteId,
        previousQuoteId,
        url
      };
    }

    case SET_VIDEO_ID: {
      const { videoId } = action.data;

      return {
        ...state,
        videoId
      };
    }

    case TOGGLE_GRAPH: {
      const showGraph = !state.showGraph;

      // side-effect
      store.set('show_graph', showGraph);

      return {
        ...state,
        showGraph
      };
    }

    default: {
      return state;
    }
  }
};
