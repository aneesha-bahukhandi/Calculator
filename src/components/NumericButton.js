/**
 * Created by aneesha.bahukhandi on 13/12/16.
 */

import React, {Component} from "react";
import {
    View, Text
} from "react-native";
import NumericStyle from "../styles/NumericButtonStyle"

class NumericButton extends Component {
    render(){
        return (
            <View style={NumericStyle.numericButton}>
                <Text style={NumericStyle.numericButtonText}>{this.props.value} </Text>
            </View>
        )
    };
}

export default NumericButton;