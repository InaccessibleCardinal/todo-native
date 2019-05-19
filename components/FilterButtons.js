import React from 'react';
import {/*StyleSheet,*/ Button, View } from 'react-native';

export default function FilterButtons({filterTodos, filteredBy}) {
    return (
        <View>
            <Button 
                color={filteredBy === 'A' ? '#8C8' : '#888'} 
                title={'Show All'} 
                onPress={() => filterTodos('A')} 
            />
            <Button
                color={filteredBy === 'C' ? '#8c8' : '#888'}
                title={'Show Completed'} 
                onPress={() => filterTodos('C')} 
            />
            <Button
                color={filteredBy === 'U' ? '#8c8' : '#888'}
                title={'Show Uncompleted'} 
                onPress={() => filterTodos('U')} 
            />
        </View>
    );
}