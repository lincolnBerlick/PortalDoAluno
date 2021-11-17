import {Platform} from 'react-native';
import styled, {css} from 'styled-components/native';
import Icons from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  margin-top: ${Platform.OS === 'android' ? 0 : 40}px; ;
`;

export const TextContent = styled.Text`
  font-size: 14px;
  color: #424242;
  font-family: 'Inter';
  line-height: 16px;
  font-weight: 600;
  margin-top: -11px;
`;

export const Icon = styled(Icons)``;
