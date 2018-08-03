import React, { Component} from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Image,
    TextInput,
    Button,
    Alert
} from 'react-native'
import {create} from '../helpers/PlatformSpecificStyles'
import Routes from '../router/Routes'

class LoginScreen extends Component {

    constructor(props) {
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleUserNameChange = this.handleUserNameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        
        this.state = {
            username: 'admin',
            password: 'admin'
        }
    }

    handleLogin() {
        if (!this.state.username || !this.state.password) {
            Alert.alert('Oops',
                'Please enter Username or password',
                [
                    { text: 'OK', onPress: () => { } },
                ])
        }else {
            if (this.state.username === 'admin' && this.state.password === 'admin') {
                this.props.navigator.push({ title: Routes.SamplesListScreen.title })
            } else {
                Alert.alert('Oops',
                    'Invalid  Credentials',
                    [
                        { text: 'OK', onPress: () => { } },
                    ])
            }
        }
    }

    handleUserNameChange(text) {
        this.setState({username: text})
    }
    handlePasswordChange(text) {
        this.setState({ password: text })
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
                        onChangeText = {this.handleUserNameChange}
                        placeholder ={'Username'}
                        style={styles.loginFields}
                        testID="username"
                        accessible
                        accessibilityLabel={'username'}
                        value= {this.state.username}
                        autoCapitalize="none"
                        autoCorrect={false}
                        />
                    <TextInput
                        secureTextEntry
                        onChangeText = {this.handlePasswordChange}
                        placeholder ={'Password'}
                        style={styles.loginFields}
                        testID="password"
                        accessible
                        accessibilityLabel={'password'}
                        value={this.state.password}
                        autoCapitalize="none"
                        autoCorrect={false}
                        
                        />
                    <View style={styles.loginButton}
                          testID="login"
                          accessible
                          accessibilityLabel={'login'}>
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

const styles = create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logoContainer: {
        marginTop: 96,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 400,
        height: 150

    },
    loginFieldsContainer: {
    },
    loginFields: {
    ios: {
        borderWidth: 1,
        borderColor: '#B4B835',
        borderRadius: 5
    },
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