import {Platform} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px 30px 0;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #03a9f4;
  font-family: 'Inter';
  font-weight: bold;
  line-height: 38.4px;
  text-align: center;
  margin-bottom: 69px;
`;

export const Cadastrese = styled.Text`
  font-size: 14px;
  color: #03a9f4;
  font-family: 'Inter';
  font-weight: 600;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: #03a9f4;
`;

export const TextHeader = styled.Text`
  font-size: 16px;
  color: #75848f;
  font-family: 'Inter';
  font-weight: 600;

  margin-left: 14px;
  align-self: flex-start;
`;
