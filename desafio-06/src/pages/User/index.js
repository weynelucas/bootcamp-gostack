import React, { Component } from 'react';

import { Container } from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  componentDidMount() {}

  render() {
    return <Container></Container>;
  }
}
