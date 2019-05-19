import createStore from './createStore';
import todosReducer from './todosReducer';

export default createStore(todosReducer);