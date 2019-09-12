import React, { useState } from 'react';
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
  CartItemDeleteButton,
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

export default function Cart() {
  const [products] = useState([
    {
      id: 1,
      title: 'Tênis de Caminhada Leve Confortável',
      price: 179.9,
      priceFormatted: 'R$ 179,90',
      amount: 3,
      subtotal: 'R$ 539,70',
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
    },
    {
      id: 2,
      title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
      price: 139.9,
      amount: 1,
      priceFormatted: 'R$ 139,90',
      subtotal: 'R$ 139,90',
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
    },
  ]);

  return (
    <Container>
      <CartContainer>
        {products.length ? (
          <>
            <CartList
              data={products}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <CartItem>
                  <CartItemBody>
                    <CartItemImage source={{ uri: item.image }} />
                    <CartItemInfo>
                      <CartItemTitle>{item.title}</CartItemTitle>
                      <CartItemPrice>{item.priceFormatted}</CartItemPrice>
                    </CartItemInfo>
                    <CartItemDeleteButton>
                      <Icon
                        name="delete-forever"
                        size={24}
                        color={colors.primary}
                      />
                    </CartItemDeleteButton>
                  </CartItemBody>

                  <CartItemFooter>
                    <CartItemActions>
                      <CartItemActionButton>
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

                      <CartItemActionButton>
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
              )}
            />
            <CartFooter>
              <CartTotalText>TOTAL</CartTotalText>
              <CartTotal>R$ 1619,10</CartTotal>
              <CheckoutButton>
                <CheckoutButtonText>FINALIZAR PEDIDO</CheckoutButtonText>
              </CheckoutButton>
            </CartFooter>
          </>
        ) : (
          <CartEmpty>
            <Icon name="remove-shopping-cart" color="#ddd" size={35} />
            <CartEmptyText>Seu carrinho está vazio.</CartEmptyText>
          </CartEmpty>
        )}
      </CartContainer>
    </Container>
  );
}
