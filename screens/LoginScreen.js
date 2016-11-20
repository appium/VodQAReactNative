import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native'

class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    VodQA
                </Text>
                <TouchableHighlight>
                    <Text style={styles.instructions}>Login</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        marginBottom: 5,
    },
})

export default LoginScreen