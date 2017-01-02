import React, { Component } from 'react'
import {
    View,
    Text,
    ScrollView
} from 'react-native'
import { create } from '../helpers/PlatformSpecificStyles'


class NativeView extends Component {

    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <ScrollView style={styles.scrollView} testID="scrollView"
             accessibilityLabel="scrollView">
                <View style={styles.container} testID="container1"
                 accessibilityLabel="container1">
                    <View style={styles.wrapper} testID="viewgroup1"
                     accessibilityLabel="viewgroup1">
                        <Text style={styles.text} testID="textView"
                        accessibilityLabel="textView">Hello World, I'm View one </Text>
                    </View>
                </View>
                <View style={styles.container} testID="container2"
                 accessibilityLabel="container2">
                    <View style={styles.wrapper} testID="viewgroup2"
                     accessibilityLabel="viewgroup2">
                        <Text style={styles.text} testID="textView"
                        accessibilityLabel="textView">Hello World, I'm View two </Text>
                    </View>
                </View>
                <View style={styles.container} testID="container3"
                 accessibilityLabel="container3">
                    <View style={styles.wrapper} testID="viewgroup3"
                     accessibilityLabel="viewgroup3">
                        <Text style={styles.text} testID="textView"
                        accessibilityLabel="textView">Hello World, I'm View three </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = create({
    scrollView: {
        marginTop: 84
    },
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        borderColor: '#ebebeb',
        borderWidth: 1,
        height: 144,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16
    },
 
    text: {
        fontSize: 20,
    }
})
export default NativeView