import React from 'react';

import api from '../../services/api';

import Container from '../../components/Container';
import { Loading, Owner } from './styles';

export default class Repository extends React.Component {
  state = {
    repository: {},
    issues: [],
    loading: true,
  };

  async componentDidMount() {
    const repoName = decodeURIComponent(this.props.match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`repos/${repoName}`),
      api.get(`repos/${repoName}/issues`, {
        params: {
          per_page: 5,
          state: 'open',
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  render() {
    const { repository, issues, loading } = this.state;

    if (loading) {
      return <Loading>Carregando...</Loading>;
    }

    return (
      <Container>
        <Owner>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
      </Container>
    );
  }
}
