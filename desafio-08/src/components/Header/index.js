import React from 'react';
import logo from '../../assets/logo.png';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Logo} from './styles';

export default function Header() {
  return (
    <Container>
      <Logo source={logo} />
      <Icon name="shopping-basket" color="#fff" size={26} />
    </Container>
  );
}
