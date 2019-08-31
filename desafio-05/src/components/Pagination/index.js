import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonList } from './styles';

export default class Pagination extends Component {
  state = {
    page: 1,
  };

  get hasPreviousPage() {
    return this.state.page > 1;
  }

  get hasNextPage() {
    const { page } = this.state;
    const { totalItems, itemsPerPage } = this.props;

    return page * itemsPerPage <= totalItems;
  }

  componentDidMount() {
    this.setState({ page: this.props.page });
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
    const { totalItems } = this.props;

    return (
      <Container>
        <ButtonList>
          <button
            disabled={this.hasPreviousPage ? 0 : 1}
            onClick={() => this.setPage(page - 1)}
          >
            Previous
          </button>
          <button
            disabled={this.hasNextPage ? 0 : 1}
            onClick={() => this.setPage(page + 1)}
          >
            Next
          </button>
        </ButtonList>
      </Container>
    );
  }
}

Pagination.prototypes = {
  page: PropTypes.number,
  totalItems: PropTypes.number,
  itemsPerPage: PropTypes.number,
  onPageChanged: PropTypes.func,
};

Pagination.defaultProps = {
  page: 1,
};
