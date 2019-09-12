import React from 'react';

import logo from '../../assets/logo.png';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Logo, CartButton, Cart, CartAmount} from './styles';

export default function Header({navigation}) {
  return (
    <Container>
      <Logo source={logo} />

      <CartButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#fff" size={26} />
        <CartAmount>3</CartAmount>
      </CartButton>
    </Container>
  );
}
