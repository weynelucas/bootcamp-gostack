import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';
import {
  CartContainer,
  CartEmpty,
  CartEmptyText,
  CartFooter,
  CartItem,
  CartItemActionButton,
  CartItemActions,
  CartItemAmount,
  CartItemBody,
  CartItemFooter,
  CartItemImage,
  CartItemInfo,
  CartItemPrice,
  CartItemSubtotal,
  CartItemTitle,
  CartList,
  CartTotal,
  CartTotalText,
  CheckoutButton,
  CheckoutButtonText,
  Container,
} from './styles';
import { formatPrice } from '../../util/format';
import {
  removeFromCart,
  updateAmountRequest,
  checkoutRequest,
} from '../../store/modules/cart/actions';

export default function Cart() {
  const dispatch = useDispatch();

  const items = useSelector(({ cart }) =>
    cart.map(p => ({
      ...p,
      subtotal: formatPrice(p.amount * p.price),
    })),
  );

  const total = useSelector(({ cart }) =>
    formatPrice(cart.reduce((previous, p) => previous + p.price * p.amount, 0)),
  );

  function renderItem(item) {
    return (
      <CartItem>
        <CartItemBody>
          <CartItemImage source={{ uri: item.image }} />
          <CartItemInfo>
            <CartItemTitle>{item.title}</CartItemTitle>
            <CartItemPrice>{item.priceFormatted}</CartItemPrice>
          </CartItemInfo>
          <CartItemActionButton
            onPress={() => dispatch(removeFromCart(item.id))}>
            <Icon name="delete-forever" size={24} color={colors.primary} />
          </CartItemActionButton>
        </CartItemBody>

        <CartItemFooter>
          <CartItemActions>
            <CartItemActionButton
              onPress={() =>
                dispatch(updateAmountRequest(item.id, item.amount - 1))
              }>
              <Icon
                name="remove-circle-outline"
                size={20}
                color={colors.primary}
              />
            </CartItemActionButton>

            <CartItemAmount
              value={String(item.amount)}
              keyboardType="numeric"
            />

            <CartItemActionButton
              onPress={() =>
                dispatch(updateAmountRequest(item.id, item.amount + 1))
              }>
              <Icon
                name="add-circle-outline"
                size={20}
                color={colors.primary}
              />
            </CartItemActionButton>
          </CartItemActions>

          <CartItemSubtotal>{item.subtotal}</CartItemSubtotal>
        </CartItemFooter>
      </CartItem>
    );
  }

  const renderFooter = () => {
    return (
      <CartFooter>
        <CartTotalText>TOTAL</CartTotalText>
        <CartTotal>{total}</CartTotal>
        <CheckoutButton onPress={() => dispatch(checkoutRequest())}>
          <CheckoutButtonText>FINALIZAR PEDIDO</CheckoutButtonText>
        </CheckoutButton>
      </CartFooter>
    );
  };

  return (
    <Container>
      <CartContainer>
        {items.length ? (
          <CartList
            data={items}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => renderItem(item)}
            ListFooterComponent={renderFooter}
          />
        ) : (
          <CartEmpty>
            <Icon
              name="remove-shopping-cart"
              color={colors.lightGray}
              size={50}
            />
            <CartEmptyText>Seu carrinho está vazio.</CartEmptyText>
          </CartEmpty>
        )}
      </CartContainer>
    </Container>
  );
}
