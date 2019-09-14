import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import colors from '../../styles/colors';
import { formatPrice } from '../../util/format';
import {
  AddToCartButton,
  AddToCartButtonText,
  Container,
  ProductAmount,
  ProductAmountText,
  ProductImage,
  ProductItem,
  ProductList,
  ProductPrice,
  ProductTitle,
} from './styles';
import { addToCartRequest } from '../../store/modules/cart/actions';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amounts = useSelector(store =>
    store.cart.reduce(
      (obj, product) => ({ ...obj, [product.id]: product.amount }),
      {},
    ),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const stockResponse = await api.get('/stock');
      const productsResponse = await api.get('/products');

      const productsWithStock = stockResponse.data
        .filter(stock => stock.amount > 0)
        .map(stock => stock.id);

      setProducts(
        productsResponse.data
          .map(p => ({
            ...p,
            priceFormatted: formatPrice(p.price),
          }))
          .filter(p => productsWithStock.includes(p.id)),
      );
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <ProductList
        data={products}
        horizontal
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ProductItem>
            <ProductImage source={{ uri: item.image }} />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.priceFormatted}</ProductPrice>
            <AddToCartButton
              onPress={() => dispatch(addToCartRequest(item.id))}>
              <ProductAmount>
                <Icon name="add-shopping-cart" size={16} color={colors.white} />
                <ProductAmountText>{amounts[item.id] || 0}</ProductAmountText>
              </ProductAmount>
              <AddToCartButtonText>ADICIONAR</AddToCartButtonText>
            </AddToCartButton>
          </ProductItem>
        )}
      />
    </Container>
  );
}
