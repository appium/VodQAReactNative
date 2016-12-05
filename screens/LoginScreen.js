import React, { Component, PropTypes } from 'react'
import {
    StyleSheet,
    Platform,
    View,
    Image,
    TextInput,
    Button,
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
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        resizeMode ="cover"
                        source={require('../assets/vodqa.png') }
                        />
                </View>
                <View style={styles.loginFieldsContainer}>
                    <TextInput
                        placeholder ={'Username'}
                        style={styles.loginFields}
                        testID="username"
                        accessible
                        accessibilityLabel={'username'}
                        />
                    <TextInput
                        secureTextEntry
                        placeholder ={'Password'}
                        style={styles.loginFields}
                        testID="password"
                        accessible
                        accessibilityLabel={'password'}
                        />
                    <View style={styles.loginButton}>
                        <Button onPress={this.handleLogin}
                            title="Log in" />
                    </View>   
                </View>
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
    },
    logoContainer: {
        marginTop: 64,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 400,
        height: 150

    },
    loginFieldsContainer: {
        marginTop: 64
    },
    loginFields: {
        ...Platform.select({
        ios: {
            borderWidth: 1,
            borderColor: '#B4B835',
            borderRadius: 5
        },
    }),
    height: 48,
    margin: 16,
    color: '#444444',
    paddingHorizontal: 16
    },
    loginButton: {
        marginHorizontal: 24
    }
})

export default LoginScreen