import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import PhotoView from 'react-native-photo-view';

class PhotoScreen extends Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
                testID="photo"
                accessibilityLabel="photo">
                <Text>Photo Screen</Text>
                <PhotoView
                    source={{ uri: 'https://prelrik.files.wordpress.com/2016/06/appium.jpg?w=640' }}
                    style={{ width: 300, height: 300 }} />
            </View>
        )
    }
}

export default PhotoScreen