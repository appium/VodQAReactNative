import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

class WebViewScreen extends Component {
  render(): React.JSX.Element {
    return (
      <WebView
        source={{ uri: 'https://news.ycombinator.com/' }}
        style={styles.webView}
      />
    );
  }
}

const styles = StyleSheet.create({
  webView: {
    marginTop: 62,
  },
});

export default WebViewScreen;
