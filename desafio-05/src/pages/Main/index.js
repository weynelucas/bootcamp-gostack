import React from 'react';
import { Link } from 'react-router-dom';

import { GoMarkGithub, GoRepo, GoSync } from 'react-icons/go';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton, List, Title } from './styles';

export default class Main extends React.Component {
  state = {
    repositories: [],
    newRepo: '',
    loading: false,
    error: false,
  };

  componentDidMount() {
    const repositories = JSON.parse(localStorage.getItem('repositories'));

    if (repositories) {
      this.setState({ repositories });
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value, error: false });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { repositories, newRepo } = this.state;

    try {
      /**
       * Check duplicated repository
       */
      const isDuplicated = repositories.some(
        repo => repo.name.toLowerCase() === newRepo.toLowerCase()
      );

      if (isDuplicated) {
        throw new Error('Duplicated repository');
      }

      this.setState({ loading: true });

      const { full_name: name } = (await api.get(
        `/repos/${this.state.newRepo}`
      )).data;

      this.setState({
        repositories: [...this.state.repositories, { name }],
        newRepo: '',
        loading: false,
      });
    } catch (err) {
      this.setState({
        error: true,
        loading: false,
      });
    }
  };

  render() {
    const { newRepo, loading, repositories, error } = this.state;

    return (
      <Container>
        <Title>
          <GoMarkGithub />
          Repositories
        </Title>

        <Form onSubmit={this.handleSubmit} error={error ? 1 : 0}>
          <input
            type="text"
            placeholder="Find a repository..."
            onChange={this.handleInputChange}
            value={newRepo}
          />
          <SubmitButton loading={loading ? 1 : 0}>
            {loading ? (
              <GoSync size={16} />
            ) : (
              <>
                <GoRepo size={16} />
                <span>New</span>
              </>
            )}
          </SubmitButton>
        </Form>

        <List>
          {repositories.map(repo => (
            <li key={repo.name}>
              <GoRepo color="#6a737d" size={16} />
              <Link to={`repository/${encodeURIComponent(repo.name)}`}>
                {repo.name}
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
