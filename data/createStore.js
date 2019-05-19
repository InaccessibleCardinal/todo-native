export default function createStore(reducer) {
    let state;
    let listeners = [];

    function getState(){
        return state;
    }

    function subscribe(f) {
        listeners.push(f);
    }

    function dispatch(action) {
        state = reducer(state, action);
        listeners.forEach((f) => f());
    }

    dispatch('@@RANDOM_INIT');
    
    return {
        getState,
        subscribe,
        dispatch
    };
}

export function combineReducers(reducers) {
    return function(state = {}, action) {
        Object.keys(reducers).reduce((nextState, key) => {
            nextState[key] = reducers[key](state, action);
            return nextState;
        }, {})
    }
}