import React, { Component, PropTypes } from 'react'
import {
    Text,
    StyleSheet,
    ScrollView,
    View,
    TouchableOpacity
} from 'react-native'
import Routes from '../router/Routes'

class SamplesListScreen extends Component {

    constructor(props) {
        super(props)
        this.getView = this.getView.bind(this)
        this.handleCarouselSample = this.handleCarouselSample.bind(this)
        this.handlePhotoScreen = this.handlePhotoScreen.bind(this)
        this.handleWebViewScreen = this.handleWebViewScreen.bind(this)
        this.handleSliderScreen = this.handleSliderScreen.bind(this)
    }

    handleCarouselSample() {
        this.props.navigator.push(Routes.CarouselScreen)
    }

    handlePhotoScreen() {
        this.props.navigator.push(Routes.PhotoScreen)
    }

    handleWebViewScreen() {
        this.props.navigator.push(Routes.WebViewScreen)
    }

    handleSliderScreen() {
        this.props.navigator.push(Routes.SliderScreen)
    }

    getView(header, subHeader, testId, handlePress) {
        return (
            <TouchableOpacity onPress={handlePress}>
                <View style={styles.itemView}
                    testID={testId}
                    accessibilityLabel={testId}>
                    <Text style={styles.header}>{header}</Text>
                    <Text style={styles.subHeader}>{subHeader}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    {this.getView('Carousel', 'Demos swipe left & right', 'carousel', this.handleCarouselSample)}
                    {this.getView('Photo View', 'Ping & Zoom', 'photoView', this.handlePhotoScreen)}
                    {this.getView('Web View', 'View hacker news', 'webView', this.handleWebViewScreen)}
                    {this.getView('Slider', 'Slide your number', 'slider', this.handleSliderScreen)}
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
        marginTop: 72
    },
    itemView: {
        borderBottomWidth: 1,
        borderColor: '#DCDCDC',
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    header: {
        fontSize: 16,
    },
    subHeader: {
        color: '#696969'
    }
})

export default SamplesListScreen