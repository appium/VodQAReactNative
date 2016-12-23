import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,Slider
} from 'react-native'

class SliderScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }


    render() {
        return (
            <View>
                <Text style={styles.text} >
                    {this.state.value && + this.state.value.toFixed(3)}
                </Text>
                <Slider
                    testID={"slider"}
                    accessibilityLabel={"slider"}
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={100}
                    onValueChange={(value) => this.setState({value: value})} />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    slider: {
        width: 300,
        margin: 50,
    },
    text: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500',
        margin: 10,
    },
});

export default SliderScreen