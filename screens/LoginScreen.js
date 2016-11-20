import React, { Component, PropTypes } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native'
import Routes from '../router/Routes'

class LoginScreen extends Component {

    constructor(props) {
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin() {
        this.props.navigator.push({ title: Routes.SamplesListScreen.title })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    VodQA
                </Text>
                <TouchableHighlight onPress={this.handleLogin}>
                    <Text style={styles.instructions}>Login</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

LoginScreen.propTypes = Object.assign({}, Component.propTypes, {
    navigator: PropTypes.object
})

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
        fontSize: 20,
        marginBottom: 5,
    },
})

export default LoginScreen