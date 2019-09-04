import React, { Component } from 'react';

import { WebView } from 'react-native';

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
