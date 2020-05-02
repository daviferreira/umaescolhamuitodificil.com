const initialState = {
  cases: [2],
  currentDate: '2020-03-02',
  currentFormattedDate: '2 de março',
  deaths: [0],
  labels: ['2 de março'],
  lastLoadedDate: '2020-03-02',
  nextQuoteId: null,
  totalCases: 2,
  totalDeaths: 0,
  url: null,
  videoId: null
};

const UPDATE_CURRENT_DATA = 'UPDATE_CURRENT_DATA';
const UPDATE_GRAPH_DATA = 'UPDATE_GRAPH_DATA';
const SET_VIDEO_ID = 'SET_VIDEO_ID';

export const updateCurrentData = data => ({
  type: UPDATE_CURRENT_DATA,
  data: {
    data
  }
});

export const updateGraphData = (data, nextQuoteId) => ({
  type: UPDATE_GRAPH_DATA,
  data: {
    data,
    nextQuoteId
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
      const { data, nextQuoteId } = action.data;

      const currentItem = data[data.length - 1];

      return {
        ...state,
        cases: [2, ...data.map(item => item.cases)],
        currentDate: currentItem.date,
        currentFormattedDate: currentItem.formattedDate,
        currentVideoId: currentItem.videoId,
        deaths: [0, ...data.map(item => item.deaths)],
        labels: ['2 de março', ...data.map(item => item.formattedDate)],
        lastLoadedDate: currentItem.date,
        nextQuoteId,
        totalCases: currentItem.cases,
        totalDeaths: currentItem.deaths,
        url: currentItem.url
      };
    }

    case UPDATE_CURRENT_DATA: {
      const {
        data: { date, formattedDate, nextQuoteId, url, videoId }
      } = action.data;

      return {
        ...state,
        currentDate: date,
        currentFormattedDate: formattedDate,
        currentVideoId: videoId,
        nextQuoteId,
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

    default: {
      return state;
    }
  }
};
