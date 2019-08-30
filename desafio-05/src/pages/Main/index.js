import React from 'react';

import { GoMarkGithub, GoRepo } from 'react-icons/go';

import { Container, Form, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>
        <GoMarkGithub />
        Repositories
      </h1>

      <Form>
        <input type="text" placeholder="Find a repository..." />
        <SubmitButton>
          <GoRepo />
          New
        </SubmitButton>
      </Form>
    </Container>
  );
}
