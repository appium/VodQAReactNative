import React, { Component } from 'react'
import {
    AppRegistry
} from 'react-native'
import Login from './screens/LoginScreen'

export default class VodQAReactNative extends Component {
    render() {
        return (
            <Login />
        )
    }
}

AppRegistry.registerComponent('VodQAReactNative', () => VodQAReactNative)
