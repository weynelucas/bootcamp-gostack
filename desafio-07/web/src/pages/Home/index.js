import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_detalhe2.jpg?ims=326x"
          alt="Tênis Nike Revolution"
        />
        <strong>Tênis Nike Revolution</strong>
        <span>R$ 159,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
