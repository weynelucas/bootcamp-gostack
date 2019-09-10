import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './styles';
import { formatPrice } from '../../util/format';

function Cart({ products, total, updateAmountRequest, removeFromCart }) {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th></th>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button
                    title="Diminuir quantidade"
                    onClick={() =>
                      updateAmountRequest(product.id, product.amount - 1)
                    }
                  >
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>

                  <input type="text" readOnly value={product.amount} />

                  <button
                    title="Aumentar a quantidade"
                    onClick={() =>
                      updateAmountRequest(product.id, product.amount + 1)
                    }
                  >
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  title="Remover produto"
                  onClick={() => removeFromCart(product.id)}
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button>FINALIZAR PEDIDO</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      total += product.price * product.amount;
      return total;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
