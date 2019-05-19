import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './data/store';
import TodoContainer from './TodoContainer';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headline}>
          <Text style={styles.title}>Native Todo App</Text>
        </View>
        <View>
          <TodoContainer store={store} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    headline: {
        borderColor: '#88c',
        borderWidth: 1,
        width: '100%',
        padding: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:  {
        fontSize: 24,
        fontWeight: 'bold'
    }
});
