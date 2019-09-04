import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #999;
`;

export const Name = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  color: #333;
  font-weight: bold;
  text-align: center;
`;

export const Bio = styled.Text`
  margin-top: 5px;
  font-size: 14px;
  color: #999;
  text-align: center;
`;

export const Stars = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Starred = styled.View`
  flex-direction: row;
  background: #eee;
  border-radius: 4px;
  padding: 15px 10px;
  margin-bottom: 10px;
`;

export const OwnerAvatar = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background-color: #999;
`;

export const Info = styled.View`
  margin-left: 10px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #333;
  font-size: 14px;
  font-weight: bold;
`;

export const Author = styled.Text`
  color: #999;
  font-size: 13px;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
