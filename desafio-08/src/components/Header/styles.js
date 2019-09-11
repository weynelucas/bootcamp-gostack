import styled from 'styled-components/native';

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

export const Cart = styled.View`
  position: relative;
`;

export const CartAmount = styled.Text`
  position: absolute;
  top: 1;
  right: -5;
  font-size: 12px;
  height: 16px;
  width: 16px;
  border-radius: 8px;
  color: #fff;
  text-align: center;
  background-color: #7159c1;
`;
