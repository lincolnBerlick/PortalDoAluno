import {Platform} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
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
  line-height: '150%';
  text-align: center;
  letter-spacing: 0.5em;
  text-decoration: underline;
  text-decoration-color: #03a9f4;
`;
