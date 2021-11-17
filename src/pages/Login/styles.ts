import {Platform} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  margin-top: ${Platform.OS === 'android' ? 40 : 40}px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #03a9f4;
  font-family: 'Inter';
  font-weight: 700;
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
