import React, {Component} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';
import makeRequest from '../data/fetch';
import {
    GET_TODOS_REQUEST, 
    GET_TODOS_SUCCESS, 
    GET_TODOS_FAILURE,
    TOGGLE_TODO
} from '../data/actionTypes';
import Todo from './Todo';

export default class TodosList extends Component {
    constructor(props) {
        super(props);
        this.toggleTodo = this.toggleTodo.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch({type: GET_TODOS_REQUEST});
        makeRequest({url: 'https://jsonplaceholder.typicode.com/todos'})
        .then((data) => {
            dispatch({
                type: GET_TODOS_SUCCESS,
                payload: data
            });
        })
        .catch((e) => {
            dispatch({
                type: GET_TODOS_FAILURE,
                payload: e
            });
        });
    }

    toggleTodo(id) {
        this.props.dispatch({
            type: TOGGLE_TODO, 
            payload: id
        });
    }

    render() {
        let {todos, filteredBy} = this.props;
        if (todos.length > 0) {
            let todosMarkup = todos.filter((t) => { //TODO replace double loop with reduce
                if (filteredBy === 'C') {
                    return t.completed;
                } else if (filteredBy === 'U') {
                    return !t.completed;
                } else {
                    return t;
                }
            })
            .map((t) => {
                return (
                    <Todo 
                        key={t.id} 
                        todo={t} 
                        toggleTodo={this.toggleTodo} 
                    />
                ); 
            });
            //TODO replace ScrollView with something that does windowing like FlatList
            return (
                <ScrollView>
                    {todosMarkup}
                </ScrollView>
            );
        }
        return (
            <ScrollView>
                <ActivityIndicator size={'large'} />
            </ScrollView>
        );
    }
}