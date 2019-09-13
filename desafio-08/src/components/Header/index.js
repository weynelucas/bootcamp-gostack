import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';
import colors from '../../styles/colors';
import { CartButton, CartTotal, Container, Logo } from './styles';

export default function Header({ navigation }) {
  const total = useSelector(store => store.cart.length);

  return (
    <Container>
      <Logo source={logo} />

      <CartButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color={colors.white} size={26} />
        <CartTotal>{total}</CartTotal>
      </CartButton>
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

Header.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};
