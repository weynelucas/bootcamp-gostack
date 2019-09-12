import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import colors from '../../styles/colors';
import {formatPrice} from '../../util/format';
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

export default function Home({navigation}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      setProducts(
        response.data.map(p => ({...p, priceFormatted: formatPrice(p.price)})),
      );
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <ProductList
        data={products}
        horizontal={true}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <ProductItem>
            <ProductImage source={{uri: item.image}} />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.priceFormatted}</ProductPrice>
            <AddToCartButton>
              <ProductAmount>
                <Icon name="add-shopping-cart" size={16} color={colors.white} />
                <ProductAmountText>3</ProductAmountText>
              </ProductAmount>
              <AddToCartButtonText>ADICIONAR</AddToCartButtonText>
            </AddToCartButton>
          </ProductItem>
        )}
      />
    </Container>
  );
}
