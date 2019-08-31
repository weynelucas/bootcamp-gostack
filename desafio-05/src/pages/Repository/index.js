import React from 'react';

import api from '../../services/api';

// import { Container } from './styles';

export default class Repository extends React.Component {
  state = {
    repository: {},
    issues: [],
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
    });
  }

  render() {
    const { repository, issues } = this.state;

    return <h1>Repository: {decodeURIComponent(repository.name)}</h1>;
  }
}
