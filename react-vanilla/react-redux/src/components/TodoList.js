import React from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { VisibilityFilters } from "../store/actions";

const TodoList = ({todos}) => {
    return (
        <ul className="list-group">
            { todos && todos.map(t =>
                <TodoItem key={t.name} todo={t} />
            )}
        </ul>
    )
}

export default connect(state => {
    const filter = state.filter;
    let todos;
    switch(filter) {
        case VisibilityFilters.SHOW_DONE: {
            todos = state.todos.filter( t => t.done )
            break;
        }
        case VisibilityFilters.SHOW_ACTIVE: {
            todos = state.todos.filter( t => !t.done )
            break;
        }
        default: {
            todos = state.todos
            break;
        }
    }
    return {todos};
})(TodoList);
