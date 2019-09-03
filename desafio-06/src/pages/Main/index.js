import React from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

export default class Main extends React.Component {
  state = {
    newUser: '',
    users: [],
  };

  handleAddUser = async () => {
    const { newUser, users } = this.state;

    const { login, name, bio, avatar_url: avatar } = (await api.get(
      `/users/${newUser}`
    )).data;

    this.setState({
      users: [...users, { login, name, bio, avatar }],
      newUser: '',
    });

    Keyboard.dismiss();
  };

  render() {
    const { newUser, users } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicione um usuário"
            onChangeText={text => this.setState({ newUser: text })}
            value={newUser}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton onPress={this.handleAddUser}>
            <Icon name="add" size={20} color="#fff" />
          </SubmitButton>
        </Form>

        <List
          keyExtractor={item => item.login}
          data={users}
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>
              <ProfileButton>
                <ProfileButtonText>Ver Perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Usuários',
};
