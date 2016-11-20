import React, { Component } from 'react'
import {
    AppRegistry
} from 'react-native'
import Router from './router/Router'

export default class VodQAReactNative extends Component {
    render() {
        return (
            <Router />
        )
    }
}

AppRegistry.registerComponent('VodQAReactNative', () => VodQAReactNative)
