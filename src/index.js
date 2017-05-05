import { combineReducers } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import officeReducer from './app/reducers/officeReducer';
import queryReducer from './app/reducers/queryReducer';

const reducers = combineReducers({
  officeReducer,
  queryReducer
})

export default reducers;
