import { rgba } from 'polished';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.lightDark};
  flex: 1;
  padding: 20px 0;
`;

export const ProductList = styled(FlatList)``;

export const ProductItem = styled.View`
  background: ${colors.white};
  border-radius: 4px;
  padding: 10px;
  margin: 0 10px;
  width: 220px;
  height: 358px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  line-height: 21px;
  color: #333;
`;

export const ProductPrice = styled.Text`
  margin-top: 5px;
  font-size: 21px;
  font-weight: bold;
`;

export const AddToCartButton = styled(RectButton)`
  margin-top: auto;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  background-color: ${colors.primary};
`;

export const ProductAmount = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${rgba(0, 0, 0, 0.1)};
`;

export const ProductAmountText = styled.Text`
  font-size: 14px;
  margin-left: 5px;
  color: ${colors.white};
`;

export const AddToCartButtonText = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  flex: 1;
  text-align: center;
`;
