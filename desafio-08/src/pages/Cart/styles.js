import {FlatList} from 'react-native';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  background-color: ${colors.lightDark};
  flex: 1;
  padding: 20px;
`;

export const CartContainer = styled.View`
  border-radius: 4px;
  background-color: ${colors.white};
  padding: 15px;
`;

export const CartList = styled(FlatList)``;

export const CartItem = styled.View`
  margin-bottom: 20px;
`;

export const CartItemBody = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const CartItemImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const CartItemInfo = styled.View``;

export const CartItemTitle = styled.Text`
  font-size: 14px;
  color: #333;
  max-width: 200px;
`;

export const CartItemPrice = styled.Text`
  font-size: 16px;
  margin-top: 5px;
  color: #000;
  font-weight: bold;
`;

export const CartItemDeleteButton = styled(BorderlessButton).attrs({
  rippleColor: '#ddd',
})`
  align-items: center;
`;

export const CartItemFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  margin-top: 20px;
  padding: 7px 10px;
  background-color: #eee;
`;

export const CartItemActions = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CartItemActionButton = styled(BorderlessButton).attrs({
  rippleColor: '#ddd',
})``;

export const CartItemAmount = styled.TextInput.attrs({
  editable: false,
})`
  background: ${colors.white};
  border-radius: 4px;
  margin: 0 5px;
  padding: 5px 12px;
  border: 1px solid #ddd;
  font-size: 14px;
  color: #666;
`;

export const CartItemSubtotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

export const CartFooter = styled.View`
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;

export const CartTotalText = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: #999;
`;

export const CartTotal = styled.Text`
  font-size: 30px;
  line-height: 35px;
  font-weight: bold;
`;

export const CheckoutButton = styled(RectButton)`
  flex-direction: row;
  border-radius: 4px;
  margin-top: 30px;
  background-color: ${colors.primary};
`;

export const CheckoutButtonText = styled.Text`
  color: ${colors.white};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  flex: 1;
  padding: 13px;
  text-transform: uppercase;
`;

export const CartEmpty = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CartEmptyText = styled.Text`
  color: #000;
  font-size: 24px;
  font-weight: bold;
`;
