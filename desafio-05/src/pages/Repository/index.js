import React from 'react';

import api from '../../services/api';

import Container from '../../components/Container';
import Pagination from '../../components/Pagination';
import { Loading, Owner, IssueList } from './styles';

export default class Repository extends React.Component {
  state = {
    repository: {},
    issues: [],
    loading: true,
    issuesLoading: false,
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

  loadIssues = async page => {
    const {
      repository: { full_name: repoName },
    } = this.state;

    this.setState({ issuesLoading: true });

    const issues = await api.get(`repos/${repoName}/issues`, {
      params: {
        per_page: 5,
        state: 'open',
        page: page,
      },
    });

    this.setState({ issues: issues.data, issuesLoading: false });
  };

  render() {
    const { repository, issues, issuesLoading, loading, page } = this.state;

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
        <IssueList loading={issuesLoading ? 1 : 0}>
          {issues.map(issue => (
            <li key={issue.id}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={label.id}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
        <Pagination
          page={page}
          totalItems={repository.open_issues_count}
          itemsPerPage={5}
          onPageChanged={this.loadIssues}
        />
      </Container>
    );
  }
}
