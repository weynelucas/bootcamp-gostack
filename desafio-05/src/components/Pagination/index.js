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

  static getDerivedStateFromProps(props, state) {
    if (state.page !== props.page) {
      return { page: props.page };
    }

    return null;
  }

  setPage = newPage => {
    const { onChange } = this.props;

    this.setState({ page: newPage });

    if (onChange) {
      this.props.onChange(newPage);
    }
  };

  render() {
    const { page } = this.state;

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
  onChange: PropTypes.func,
};

Pagination.defaultProps = {
  page: 1,
  totalItems: 0,
  itemsPerPage: 5,
};
