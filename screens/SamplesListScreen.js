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
        this.goToScreen = this.goToScreen.bind(this)
    }

    goToScreen(screenName) {
        this.props.navigator.push(screenName)
    }

    getView(header, subHeader, testId, screenName) {
        return (
            <TouchableOpacity onPress={() => { this.goToScreen(screenName) } }
                testID={testId}
                accessibilityLabel={testId}>
                <View style={styles.itemView}>
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
                    {this.getView('Carousel', 'Demos swipe left & right', 'carousel', Routes.CarouselScreen)}
                    {this.getView('Photo View', 'Ping & Zoom', 'photoView', Routes.PhotoScreen)}
                    {this.getView('Web View', 'View hacker news', 'webView', Routes.WebViewScreen)}
                    {this.getView('Slider', 'Slide your number', 'slider', Routes.SliderScreen)}
                    {this.getView('Drag & Drop', 'Demo drag and drop', 'dragAndDrop', Routes.DragAndDrop)}
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