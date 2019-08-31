import React, { Component } from 'react';

import { Container } from './styles';

export default class Pagination extends Component {
  static defaultProps = {
    page: 1,
  };

  get hasPreviousPage() {
    return this.props.page > 1;
  }

  render() {
    const { page } = this.props;

    return (
      <Container>
        <button disabled={this.hasPreviousPage ? 0 : 1}>Previous</button>
        <button>Next</button>
      </Container>
    );
  }
}
