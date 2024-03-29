import React from 'react';
import { bindActionCreators } from 'redux';

import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';
import { formatPrice } from '../../util/format';
import { connect } from 'react-redux';

class Home extends React.Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    this.setState({
      products: response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      })),
    });
  }

  render() {
    const { products } = this.state;
    const { amount, addToCartRequest } = this.props;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button type="button" onClick={() => addToCartRequest(product.id)}>
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
                {amount[product.id] || 0}
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    return {
      ...amount,
      [product.id]: product.amount,
    };
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
