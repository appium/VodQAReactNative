import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Slider from 'react-native-slider'

class SliderScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Slider
                    minimumValue={0}
                    maximumValue={100}
                    step={1}
                    minimumTrackTintColor="#1fb28a"
                    maximumTrackTintColor="#d3d3d3"
                    thumbTintColor="#1a9274"
                    onValueChange={(value) => this.setState({ value })}
                    />
                <Text style={styles.text}>Value: {this.state.value}</Text>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    text: {
        alignSelf: 'center'
    }
})

export default SliderScreen