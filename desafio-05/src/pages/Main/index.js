import React from 'react';

import { GoMarkGithub, GoRepo } from 'react-icons/go';

import { Container, Form, SubmitButton } from './styles';

export default class Main extends React.Component {
  state = {
    repositories: [],
    newRepo: '',
  };

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      repositories: [...this.state.repositories],
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
