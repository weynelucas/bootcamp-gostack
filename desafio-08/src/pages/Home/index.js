import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';
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
  return (
    <Container>
      <ProductList
        data={[
          {
            id: 1,
            title: 'Tênis de Caminhada Leve Confortável',
            price: 179.9,
            image:
              'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
          },
          {
            id: 2,
            title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
            price: 139.9,
            image:
              'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
          },
        ]}
        horizontal={true}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <ProductItem>
            <ProductImage source={{uri: item.image}} />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.price}</ProductPrice>
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
