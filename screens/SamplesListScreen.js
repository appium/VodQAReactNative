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
        this.handleCarouselSample = this.handleCarouselSample.bind(this)
        this.handlePhotoScreen = this.handlePhotoScreen.bind(this)
        this.handleWebViewScreen = this.handleWebViewScreen.bind(this)
    }

    handleCarouselSample() {
        this.props.navigator.push(Routes.CarouselScreen)
    }

    handlePhotoScreen(){
        this.props.navigator.push(Routes.PhotoScreen)
    }

    handleWebViewScreen() {
        this.props.navigator.push(Routes.WebViewScreen)
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.handleCarouselSample}>
                        <View style={styles.itemView}
                            testID="carousel"
                            accessibilityLabel="carousel">
                            <Text style={styles.header}>Carousel</Text>
                            <Text style={styles.subHeader}>Demos swipe left & right</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handlePhotoScreen}>
                        <View style={styles.itemView}
                            testID="photoView"
                            accessibilityLabel="photoView">
                            <Text style={styles.header}>Photo View</Text>
                            <Text style={styles.subHeader}>Ping & Zoom</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handleWebViewScreen}>
                        <View style={styles.itemView}
                            testID="webView"
                            accessibilityLabel="webView">
                            <Text style={styles.header}>Web View</Text>
                            <Text style={styles.subHeader}>View hacker news</Text>
                        </View>
                    </TouchableOpacity>
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