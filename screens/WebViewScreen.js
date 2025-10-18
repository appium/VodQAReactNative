import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class WebViewScreen extends Component {
    render() {
        return (
            <WebView
                source={{ uri: 'https://news.ycombinator.com/' }}
                style={{ marginTop: 62 }}
                />
        );
    }
}

export default WebViewScreen;