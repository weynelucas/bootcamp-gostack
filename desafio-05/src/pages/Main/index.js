import React from 'react';

import { GoMarkGithub, GoRepo } from 'react-icons/go';

import api from '../../services/api';

import { Container, Form, SubmitButton } from './styles';

export default class Main extends React.Component {
  state = {
    repositories: [],
    newRepo: '',
  };

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const repo = (await api.get(`/repos/${this.state.newRepo}`)).data;

    this.setState({
      repositories: [...this.state.repositories, repo],
      newRepo: '',
    });
  };

  render() {
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
            value={this.state.newRepo}
          />
          <SubmitButton>
            <GoRepo size={16} />
            New
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
