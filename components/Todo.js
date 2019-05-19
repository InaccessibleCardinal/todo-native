import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function Todo({todo, toggleTodo}) {
    let {id, userId, title, completed} = todo;
    return (
        <View style={styles.view}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.completed}>
                Completed: {completed ? 'true' : 'false'}
            </Text>
            <Button  
                onPress={() => toggleTodo(id)}
                title={completed ? 'Undo' : 'Mark Complete'}
                color={completed ? '#c88' : '#8c8'}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    view: {
        padding: 10
    },
    title: {
        fontSize: 16,
        color: '#333',
        textTransform: 'capitalize'
    },
    completed: {
        fontSize: 16,
        color: '#000',
        marginBottom: 10
    }
});