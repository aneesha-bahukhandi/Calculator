/**
 * Created by aneesha.bahukhandi on 13/12/16.
 */

import React, {Component} from "react";
import {
    View,
    AppRegistry
} from "react-native";
import codePush, {InstallMode} from "react-native-code-push";

import Style from "../styles/CalculatorContainerStyle"
import NumericButton from "../components/NumericButton"
import Constants from "../util/Constants"

let updateDialogOptions = {
    updateTitle: "You have an update",
    optionalUpdateMessage: "Update available. Install?",
    optionalIgnoreButtonLabel: "No",
    optionalInstallButtonLabel: "Yes",
};

class Calculator extends Component {


    componentDidMount(){
        codePush.sync({installMode: InstallMode.ON_NEXT_RESUME, minimumBackgroundDuration : 60 , updateDialog: updateDialogOptions});
    }
    render(){
        return (
            <View style={Style.rootContainer}>
                <View style={Style.resultContainer}/>
                <View style={Style.buttonsContainer}>
                    {this.renderCalculatorButtons()}
                </View>
            </View>
        );
    }

    renderCalculatorButtons(){
        let buttons = [];
        for (let r = 0; r < Constants.CalculatorButtonsValues.length; r++){
            let row = Constants.CalculatorButtonsValues[r];
            let buttonRow = [];
            for (let c = 0; c < row.length; c++){
                buttonRow.push(<NumericButton value = {row[c]} key = {r + "-" + c}/>);
            }
            buttons.push(<View style={Style.inputRow} key={"row-" + r}>{buttonRow}</View>)
        }
        return buttons;
    }
}

AppRegistry.registerComponent("Calculator", () => Calculator);