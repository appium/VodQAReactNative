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
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <View style={styles.wrapper}>
                        <Text style={styles.text}>Hello World, I'm View one </Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.wrapper}>
                        <Text style={styles.text}>Hello World, I'm View two </Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.wrapper}>
                        <Text style={styles.text}>Hello World, I'm View three </Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.wrapper}>
                        <Text style={styles.text}>Hello World, I'm View four </Text>
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