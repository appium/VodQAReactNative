// Mock react-native-webview
jest.mock('react-native-webview', () => {
  const {View} = require('react-native');
  return {
    WebView: View,
  };
});

// Mock @react-native-community/slider
jest.mock('@react-native-community/slider', () => {
  const {View} = require('react-native');
  return {
    __esModule: true,
    default: View,
  };
});

// Mock @react-native-picker/picker
jest.mock('@react-native-picker/picker', () => {
  const {View} = require('react-native');
  return {
    Picker: View,
  };
});

// Mock react-native-image-viewing
jest.mock('react-native-image-viewing', () => {
  const {View} = require('react-native');
  return {
    __esModule: true,
    default: View,
  };
});

// Mock react-native-deprecated-custom-components
jest.mock('react-native-deprecated-custom-components', () => {
  const React = require('react');
  const {View} = require('react-native');

  return {
    Navigator: class Navigator extends React.Component {
      render() {
        return React.createElement(View, this.props);
      }
    },
  };
});
