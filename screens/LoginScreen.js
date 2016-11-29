import React, { Component, PropTypes } from 'react'
import {
    StyleSheet,
    Text,
    View,
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
                <Text style={styles.title}>
                    VodQA
                </Text>
                <View style={styles.loginFieldsContainer}>
                    <View style={styles.inputField}>
                        <TextInput
                            placeholder ={'Username'}
                            style={styles.loginFields}
                            testID="username"
                            accessible
                            accessibilityLabel={'username'}
                            />
                    </View>
                    <View style={styles.inputField}>
                        <TextInput
                            secureTextEntry 
                            placeholder ={'Password'}
                            style={styles.loginFields}
                            testID="password"
                            accessible
                            accessibilityLabel={'password'}
                            />   
                    </View>       
                </View>
                <Button onPress={this.handleLogin}
                    title="Log in" />
               
            </View>
        )
    }
}

LoginScreen.propTypes = Object.assign({}, Component.propTypes, {
    navigator: PropTypes.object
})

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#B4B835',
        flex: 1,
        marginTop: 64
    },
    title: {
        color: '#fff',
        fontSize: 64,
        textAlign: 'center',
        fontWeight: '600',
        margin: 10,
    },
    loginFieldsContainer: {
    },
  
    loginFields: {
        backgroundColor: '#ced250',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        height: 48,
        margin: 16,
        color: '#fff',
        paddingHorizontal: 16
    }
})

export default LoginScreen