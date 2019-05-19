import React from 'react';
import {View} from 'react-native';
import FilterButton from './FilterButton';
import {buttonStyles} from './buttonStyles';

export default function FilterButtons({filterTodos, filteredBy}) {
    return (
        <View style={buttonStyles.view}>
            <FilterButton 
                buttonText={'Show All'} 
                filterType={'A'}
                pressHandler={filterTodos}
                filteredBy={filteredBy}
            />
            <FilterButton 
                buttonText={'Show Completed'} 
                filterType={'C'}
                pressHandler={filterTodos}
                filteredBy={filteredBy} 
            />
            <FilterButton
                buttonText={'Show Incomplete'} 
                filterType={'U'}
                pressHandler={filterTodos}
                filteredBy={filteredBy} 
            />
        </View>
    );
}
