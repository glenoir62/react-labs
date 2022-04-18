import * as reducers from './reducers';
import { combineReducers } from 'redux';
import { createStore } from 'redux';

const todoAppReducer = combineReducers(reducers);
const store = createStore(todoAppReducer);

export default store;
