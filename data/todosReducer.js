import * as C from './actionTypes';
const initialState = {
    fetching: false,
    todos: [],
    error: null,
    filteredBy: 'A'
};

export default function(state = initialState, action) {

    switch (action.type) {
        case C.GET_TODOS_REQUEST: {
            return {...state, fetching: true};
        }
        case C.GET_TODOS_SUCCESS: {
            return {
                ...state, 
                todos: makeTodos(action.payload),
                fetching: false
            };
        }
        case C.GET_TODOS_FAILURE: {
            return {
                ...state, 
                error: action.payload,
                fetching: false
            };
        }
        case C.TOGGLE_TODO: {
            
            let todos = [...state.todos];
            let todoToToggle = {...todos.find((t) => t.id === action.payload)};
            todoToToggle.completed = !todoToToggle.completed;
            return {
                ...state,
                todos: updateTodos(todos, todoToToggle)
            };
        }
        case C.FILTER_TODOS: {
            return {...state, filteredBy: action.payload};
        }
        
        default: {
            return state;
        }
    }

}

function makeTodos(todos) {
    return todos.map((t, index) => {
        t.title = `${t.title[0].toUpperCase()}${t.title.slice(1)}.`;
        return {...t, index};
    });
}

function updateTodos(todos, todo) {
    let l = todos.length;
    let index = todo.index;
    return todos.slice(0, index).concat({...todo}, todos.slice(index + 1, l));
}

