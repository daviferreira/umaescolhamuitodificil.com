import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import PropTypes from 'prop-types';

import rootReducer from '.';

const createStore = () => reduxCreateStore(rootReducer);

const ReduxWrapper = ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);

ReduxWrapper.propTypes = {
  element: PropTypes.node.isRequired
};

export default ReduxWrapper;
