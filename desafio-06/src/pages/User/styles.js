import styled from 'styled-components/native';

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
