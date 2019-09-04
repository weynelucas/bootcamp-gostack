import React, { Component } from 'react';
import { ActivityIndicator, RefreshControl } from 'react-native';

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
    user: {},
    stars: [],
    page: 1,
    isLastPage: false,
    loading: false,
    loadingMore: false,
    refreshing: false,
  };

  componentDidMount() {
    this.setState({ user: this.props.navigation.getParam('user') });

    this.refreshList();
  }

  refreshList = async () => {
    const { user } = this.state;

    this.setState({ refreshing: true });

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({
      stars: response.data,
      page: 1,
      isLastPage: false,
      refreshing: false,
    });
  };

  loadMore = async () => {
    const { user, page, stars, loadingMore, isLastPage } = this.state;

    if (loadingMore || isLastPage) {
      return;
    }

    const next = page + 1;

    this.setState({ loadingMore: true });

    const response = await api.get(`/users/${user.login}/starred`, {
      params: { page: next },
    });

    this.setState({
      stars: [...stars, ...response.data],
      loadingMore: false,
      page: next,
      isLastPage: response.data.length === 0,
    });
  };

  renderListFooter = () => {
    const { loadingMore } = this.state;

    return (
      loadingMore && (
        <Loading>
          <ActivityIndicator size="small" color="#222" />
        </Loading>
      )
    );
  };

  render() {
    const { stars, loading, refreshing } = this.state;
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
            <ActivityIndicator size="large" color="#222" />
          </Loading>
        ) : (
          <Stars
            onRefresh={this.refreshList}
            refreshing={refreshing}
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
