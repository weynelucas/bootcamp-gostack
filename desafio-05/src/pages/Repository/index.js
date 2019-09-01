import React from 'react';
import { Link } from 'react-router-dom';
import { GoIssueOpened } from 'react-icons/go';

import api, { searchRepoIssues } from '../../services/api';

import Container from '../../components/Container';
import Pagination from '../../components/Pagination';
import {
  Loading,
  Owner,
  IssueContainer,
  IssueHeader,
  IssueList,
  Empty,
} from './styles';

export default class Repository extends React.Component {
  state = {
    repository: {},
    issues: {},
    loading: true,
    issuesLoading: false,
    searchParams: {
      page: 1,
      per_page: 5,
      state: 'open',
    },
  };

  async componentDidMount() {
    const repoName = decodeURIComponent(this.props.match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`repos/${repoName}`),
      searchRepoIssues(repoName),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  componentDidUpdate(_, prevState) {
    const { searchParams } = this.state;

    if (searchParams !== prevState.searchParams) {
      this.loadRepoIssues();
    }
  }

  loadRepoIssues = async () => {
    const { repository, searchParams } = this.state;

    this.setState({ issuesLoading: true });

    const issues = await searchRepoIssues(repository.full_name, searchParams);

    this.setState({ issues: issues.data, issuesLoading: false });
  };

  handlePageChanged = page => {
    this.setState({
      searchParams: {
        ...this.state.searchParams,
        page,
      },
    });
  };

  render() {
    const {
      repository,
      issues,
      issuesLoading,
      loading,
      searchParams,
    } = this.state;

    if (loading) {
      return <Loading>Carregando...</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <IssueContainer loading={issuesLoading ? 1 : 0}>
          {issues.total_count ? (
            <>
              <IssueHeader>
                <h1>
                  <GoIssueOpened size={30} color="#222" />
                  Issues <span>{issues.total_count}</span>
                </h1>
                <select>
                  <option value="open">Open</option>
                  <option value="closed">Closed</option>
                  <option value="all">All</option>
                </select>
              </IssueHeader>
              <IssueList>
                {issues.items.map(issue => (
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
                page={searchParams.page}
                totalItems={issues.total_count}
                onChange={this.handlePageChanged}
              />
            </>
          ) : (
            <Empty>This repository has no issues registered yet</Empty>
          )}
        </IssueContainer>
      </Container>
    );
  }
}
