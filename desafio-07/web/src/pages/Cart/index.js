import React from 'react';

import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
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
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_detalhe2.jpg?ims=326x"
                alt="Tênis Nike Revolution"
              />
            </td>
            <td>
              <strong>Tênis Nike Revolution</strong>
              <span>R$ 159,99</span>
            </td>
            <td>
              <div>
                <button title="Diminuir quantidade">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="text" readOnly value={2} />
                <button title="Aumentar a quantidade">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 259,80</strong>
            </td>
            <td>
              <button title="Remover produto">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button>FINALIZAR PEDIDO</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ 1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}
