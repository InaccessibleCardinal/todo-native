import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodosList from './components/TodosList';
import FilterButtons from './components/FilterButtons';

export default class extends Component {
    constructor(props) {
        super(props);
        let {store} = props;
        this.state = {
            storeState: store.getState()
        }
        this.store = store;
        this.updateStoreState = this.updateStoreState.bind(this);
        this.filterTodos = this.filterTodos.bind(this);
    }

    componentDidMount() {
        this.subscribe();
    }

    subscribe() {
        this.store.subscribe(this.updateStoreState);
    }

    updateStoreState() {
        let nextStoreState = this.store.getState();
        let {storeState} = this.state;
        if (nextStoreState !== storeState) {
            this.setState((prevState) => {
                return {storeState: nextStoreState};
            });
        }
    }

    filterTodos(filterType) {
        this.store.dispatch({
            type: 'FILTER_TODOS', 
            payload: filterType
        });
    }

    render() {
        let {todos, filteredBy} = this.state.storeState;
        return (
            <View style={styles.view}>
                <FilterButtons 
                    filterTodos={this.filterTodos} 
                    filteredBy={filteredBy} 
                />
                <TodosList 
                    todos={todos} 
                    dispatch={this.store.dispatch} 
                    filteredBy={filteredBy} 
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        height: 500
    }
});