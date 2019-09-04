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
  LoadingStars,
  LoadingMore,
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

    this.setState({ loadingMore: true });

    const response = await api.get(`/users/${user.login}/starred`, {
      params: { page },
    });

    this.setState({
      stars: [...stars, ...response.data],
      loadingMore: false,
    });
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
          <LoadingStars>
            <ActivityIndicator size="large" color="#2cbe4e" />
          </LoadingStars>
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
          />
        )}

        {loadingMore && (
          <LoadingMore>
            <ActivityIndicator size="small" color="#2cbe4e" />
          </LoadingMore>
        )}
      </Container>
    );
  }
}
