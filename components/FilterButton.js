import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {buttonStyles}  from './buttonStyles';
//({buttonText, filterType, pressHandler})
export default class FilterButton extends Component {
    constructor(props) {
        super(props);
        this.state = {filterType: props.filterType};
        this.pressHandler = this.pressHandler.bind(this);
    }
    pressHandler() {
        this.props.pressHandler(this.state.filterType);
    }
    render() {
        let {filteredBy, buttonText} = this.props;
        let {filterType} = this.state;
        return (
            <TouchableOpacity onPress={this.pressHandler}>
                <Text style={filteredBy === filterType ? buttonStyles.a : buttonStyles.i}>
                    {buttonText}
                </Text>
            </TouchableOpacity>
        );
    }
    
}