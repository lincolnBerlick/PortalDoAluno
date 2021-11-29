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

  font-weight: 600;
  margin-top: -11px;
`;

export const Icon = styled(Icons)``;

export const AlunosCardView = styled.View`
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;

export const CardAlunoText = styled.Text`
  font-size: 12px;
  color: #424242;
  font-family: 'Inter';

  text-align: center;
  margin-top: 4px;
`;
