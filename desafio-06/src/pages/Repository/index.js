import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { WebView } from 'react-native-webview';

export default class Repository extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').name,
  });

  render() {
    const { navigation } = this.props;

    const repo = navigation.getParam('repository');

    return <WebView style={{ flex: 1 }} source={{ uri: repo.html_url }} />;
  }
}
