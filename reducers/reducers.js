import { combineReducers } from 'redux'
import { ADD_TODO, REMOVE_TODO } from '../actions/actions';

function todo(state, action) {
    switch (action.type) {

        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
            }

        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {

        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
        ]

        case REMOVE_TODO:
            return state.filter((item) => item.text !== action.text)

        default:
            return state
    }
}

const todoApp = combineReducers({
    todos
})

export default todoApp