import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Router from './router/Router';

export default class VodQAReactNative extends Component {
  render(): React.JSX.Element {
    return <Router />;
  }
}

AppRegistry.registerComponent('VodQAReactNative', () => VodQAReactNative);
