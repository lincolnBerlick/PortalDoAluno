import {Platform} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
flex: 1;
padding: 0 30px;
margin-top: ${Platform.OS === 'android' ? 0 : 40}px; ;
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
  font-weight: 700;

  margin-left: 14px;
  align-self: flex-start;
`;
