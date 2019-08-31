import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default class Pagination extends Component {
  state = {
    page: 1,
  };

  get hasPreviousPage() {
    return this.state.page > 1;
  }

  componentDidMount() {
    this.setPage(this.props.page);
  }

  setPage = newPage => {
    const { onPageChanged } = this.props;

    this.setState({ page: newPage });

    if (onPageChanged) {
      this.props.onPageChanged(newPage);
    }
  };

  render() {
    const { page } = this.state;

    return (
      <Container>
        <button
          disabled={this.hasPreviousPage ? 0 : 1}
          onClick={() => this.setPage(page - 1)}
        >
          Previous
        </button>
        <button onClick={() => this.setPage(page + 1)}>Next</button>
      </Container>
    );
  }
}

Pagination.prototypes = {
  page: PropTypes.number,
  onPageChanged: PropTypes.func,
};

Pagination.defaultProps = {
  page: 1,
};
