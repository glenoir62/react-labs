import * as actions from './actions';
import {combineReducers} from 'redux';

const todos = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_TODO:
            return [...state, action.todo];
        case actions.DELETE_TODO:
            return state.filter((t, i) => i !== action.index);
        case actions.TOGGLE_TODO:
            return state.map((t, i) => {
                if (i === action.index) {
                    t.done = !t.done;
                }
                return t;
            })
        default:
            return state
    }
}

const filter = (state = actions.VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case actions.SET_FILTER:
            return action.filter;
        default:
            return state
    }
}

export const todoAppReducer = combineReducers({
    filter,
    todos
})
