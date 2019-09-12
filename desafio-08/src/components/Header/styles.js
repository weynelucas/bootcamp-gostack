import {darken} from 'polished';
import {BorderlessButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image`
  width: 185px;
  height: 24px;
`;

export const CartButton = styled(BorderlessButton).attrs({
  rippleColor: darken(0.02, colors.dark),
})`
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const CartTotal = styled.Text`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;
  width: 16px;
  border-radius: 8px;
  color: ${colors.white};
  text-align: center;
  background-color: ${colors.primary};
`;
