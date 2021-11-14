import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Feather';

export const Container = styled(RectButton)`
  width: 311px;
  height: 47px;
  background-color: #03a9f4;
  border-radius: 10px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Inter';
  color: #ffffff;
  font-size: 14px;
`;

export const Icon = styled(Icons)``;
