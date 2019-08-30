import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

class roland extends Component {
  render() {
    return <WebView source={{uri: 'https://xplicitsport.online'}} />;
  }
}

export default roland;
