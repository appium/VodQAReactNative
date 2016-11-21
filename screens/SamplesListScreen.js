import React, { Component, PropTypes } from 'react'
import {
    Text,
    StyleSheet,
    ScrollView,
    View,
    TouchableHighlight
} from 'react-native'
import Routes from '../router/Routes'

class SamplesListScreen extends Component {

    constructor(props) {
        super(props)
        this.handleCarouselSample = this.handleCarouselSample.bind(this)
    }

    handleCarouselSample() {
        this.props.navigator.push(Routes.CarouselScreen)
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <TouchableHighlight onPress={this.handleCarouselSample}>
                        <View>
                            <Text>Carousel</Text>
                            <Text>Demos swipe left & right</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        )
    }
}

SamplesListScreen.propTypes = Object.assign({}, Component.propTypes, {
    navigator: PropTypes.object
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 52
    },
})

export default SamplesListScreen