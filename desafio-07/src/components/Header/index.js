import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

function Header({ total }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{total} itens</span>
        </div>
        <MdShoppingBasket color="#fff" size={36} />
      </Cart>
    </Container>
  );
}

const mapStateToProps = state => ({
  total: state.cart.length,
});

export default connect(mapStateToProps)(Header);
