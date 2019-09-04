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
    stars: [],
    page: 1,
    isLastPage: false,
    loading: false,
    loadingMore: false,
    refreshing: false,
  };

  componentDidMount() {
    this.setState({ loading: true }, this.load);
  }

  load = async (page = 1) => {
    const { navigation } = this.props;
    const { stars } = this.state;

    const user = navigation.getParam('user');

    const response = await api.get(`/users/${user.login}/starred`, {
      params: { page },
    });

    this.setState({
      stars: [...stars, ...response.data],
      page,
      isLastPage: response.data.length === 0,
      loading: false,
      loadingMore: false,
      refreshing: false,
    });
  };

  refreshList = () => {
    this.setState(
      {
        stars: [],
        page: 1,
        isLastPage: false,
        refreshing: true,
      },
      this.load
    );
  };

  handleNavigate = repository => {
    const { navigation } = this.props;

    navigation.navigate('Repository', { repository });
  };

  loadMore = () => {
    const { page, isLastPage, loadingMore } = this.state;

    if (loadingMore || isLastPage) {
      return;
    }

    const nextPage = page + 1;

    this.setState(
      {
        loadingMore: true,
        page: nextPage,
      },
      () => this.load(nextPage)
    );
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
    const { navigation } = this.props;
    const { stars, loading, refreshing } = this.state;

    const user = navigation.getParam('user');

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
              <Starred onPress={() => this.handleNavigate(item)}>
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
