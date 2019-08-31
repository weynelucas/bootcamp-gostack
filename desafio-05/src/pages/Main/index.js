import React from 'react';

import { GoMarkGithub, GoRepo, GoSync } from 'react-icons/go';

import api from '../../services/api';

import { Container, Form, SubmitButton, List } from './styles';

export default class Main extends React.Component {
  state = {
    repositories: [],
    newRepo: '',
    loading: false,
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
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { full_name: name } = (await api.get(
      `/repos/${this.state.newRepo}`
    )).data;

    this.setState({
      repositories: [...this.state.repositories, { name }],
      newRepo: '',
      loading: false,
    });
  };

  render() {
    const { newRepo, loading, repositories } = this.state;

    return (
      <Container>
        <h1>
          <GoMarkGithub />
          Repositories
        </h1>

        <Form onSubmit={this.handleSubmit}>
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
              <a href="">{repo.name}</a>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
