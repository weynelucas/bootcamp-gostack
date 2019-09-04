import React, { Component } from 'react';

import { Container, Header, Avatar, Name, Bio } from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  componentDidMount() {}

  render() {
    const user = this.props.navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
      </Container>
    );
  }
}
