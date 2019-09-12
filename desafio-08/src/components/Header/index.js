import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/logo.png';
import colors from '../../styles/colors';
import {CartButton, CartTotal, Container, Logo} from './styles';

export default function Header({navigation}) {
  return (
    <Container>
      <Logo source={logo} />

      <CartButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color={colors.white} size={26} />
        <CartTotal>3</CartTotal>
      </CartButton>
    </Container>
  );
}
