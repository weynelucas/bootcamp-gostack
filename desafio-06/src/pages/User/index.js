import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';

import api from '../../services/api';
import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
  Loading,
} from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  state = {
    stars: [],
    page: 1,
    loading: false,
    loadingMore: false,
  };

  async componentDidMount() {
    const user = this.props.navigation.getParam('user');

    this.setState({ loading: true });

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data, loading: false });
  }

  loadMore = async () => {
    const { page, stars } = this.state;
    const user = this.props.navigation.getParam('user');
    const newPage = page + 1;

    this.setState({ loadingMore: true });

    const response = await api.get(`/users/${user.login}/starred`, {
      params: { page: newPage },
    });

    this.setState({
      stars: [...stars, ...response.data],
      loadingMore: false,
      page: newPage,
    });
  };

  renderListFooter = () => {
    const { loadingMore } = this.state;

    return (
      loadingMore && (
        <Loading>
          <ActivityIndicator size="small" color="#2cbe4e" />
        </Loading>
      )
    );
  };

  render() {
    const { stars, loading, loadingMore } = this.state;
    const user = this.props.navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        {loading ? (
          <Loading>
            <ActivityIndicator size="large" color="#2cbe4e" />
          </Loading>
        ) : (
          <Stars
            onEndReachedThreshold={0.2}
            onEndReached={this.loadMore}
            keyExtractor={item => String(item.id)}
            data={stars}
            renderItem={({ item }) => (
              <Starred>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
            ListFooterComponent={this.renderListFooter}
          />
        )}
      </Container>
    );
  }
}
