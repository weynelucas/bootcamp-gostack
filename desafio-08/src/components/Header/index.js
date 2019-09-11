import React from 'react';
import logo from '../../assets/logo.png';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Logo, Cart, CartAmount} from './styles';

export default function Header() {
  return (
    <Container>
      <Logo source={logo} />

      <Cart>
        <Icon name="shopping-basket" color="#fff" size={26} />
        <CartAmount>3</CartAmount>
      </Cart>
    </Container>
  );
}
