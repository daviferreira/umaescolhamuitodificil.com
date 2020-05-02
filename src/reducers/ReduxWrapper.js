import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import PropTypes from 'prop-types';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '.';

const createStore = () => {
  const enhancer = composeWithDevTools();

  return reduxCreateStore(rootReducer, {}, enhancer);
};

const ReduxWrapper = ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);

ReduxWrapper.propTypes = {
  element: PropTypes.node.isRequired
};

export default ReduxWrapper;
