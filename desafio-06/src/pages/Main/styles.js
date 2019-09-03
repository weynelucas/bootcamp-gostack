import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  padding-bottom: 20px;
  border-bottom-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background-color: #2cbe4e;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
`;

export const List = styled(FlatList).attrs({
  showVerticalScrollIndicator: false,
})`
  margin-top: 30px;
`;

export const User = styled.View`
  align-items: center;
  justify-content: center;
  margin: 15px 0;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 36px;
  background: #eee;
`;

export const Name = styled.Text`
  margin-top: 10px;
  color: #222;
  font-weight: bold;
  font-size: 14px;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  margin-top: 5px;
  color: #999;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  color: #fff;
  background-color: #2cbe4e;
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;
  align-self: stretch;
`;

export const ProfileButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
`;
