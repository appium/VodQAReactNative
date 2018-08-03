import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
        this.goToScreen = this.goToScreen.bind(this)
    }

    goToScreen(screenName) {
        this.props.navigator.push(screenName)
    }

    getView(header, subHeader, testId, screenName) {
        return (
            <TouchableOpacity accessible={false} onPress={() => { this.goToScreen(screenName) } }
                testID={testId}
                accessibilityLabel={testId}>
                <View style={styles.itemView}>
                    <Text style={styles.header}
                        testID={testId}
                        accessible={true}
                        accessibilityLabel={testId}>{header}</Text>
                    <Text style={styles.subHeader}
                        testID={subHeader}
                        accessible={true}
                        accessibilityLabel={subHeader}>{subHeader}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <ScrollView testID="scrollView"
                accessibilityLabel="scrollView">
                <View style={styles.container}>
                    {this.getView('Native View', 'Chained View', 'chainedView', Routes.NativeView)}
                    {this.getView('Slider', 'Slide your number', 'slider1', Routes.SliderScreen)}
                    {this.getView('Vertical swiping', 'Demos vertical swiping ', 'verticalSwipe', Routes.VerticalSwipe)}
                    {this.getView('Drag & Drop', 'Demo drag and drop', 'dragAndDrop', Routes.DragAndDrop)}
                    {this.getView('Double Tap', 'Demo double tap button', 'doubleTap', Routes.DoubleTap)}
                    {this.getView('Long Press', 'Demo Long press button', 'longPress', Routes.LongPress)}
                    {this.getView('Photo View', 'Ping & Zoom', 'photoView', Routes.PhotoScreen)}
                    {this.getView('Web View', 'View hacker news', 'webView', Routes.WebViewScreen)}
                    {this.getView('Carousel', 'Demos swipe left & right', 'carousel', Routes.CarouselScreen)}
                    {this.getView('Wheel Picker', 'Demos wheel picker color', 'wheelPicker', Routes.WheelPicker)}
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