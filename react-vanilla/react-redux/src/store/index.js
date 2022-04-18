import * as reducers from './reducers';
import { combineReducers } from 'redux';
import { createStore } from 'redux';

const todosReducer = combineReducers(reducers)
const store = createStore(todosReducer);

export default store;
