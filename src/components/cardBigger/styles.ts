import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 311px;
  height: 110px;
  background-color: #ffffff;
  border-radius: 8px;
  padding-top: 16px;
  padding-left: 15px;
`;

export const AlunoNomeText = styled.Text`
  font-size: 20px;
  color: #424242;
  font-weight: bold;
  font-family: Inter;
  padding: 0;
  line-height: 20px;
`;

export const Data = styled.Text`
  font-size: 14px;
  font-family: Inter;
  line-height: 14px;
  color: #424242;
  margin-bottom: 4px;
`;

export const Hora = styled.Text`
  font-size: 14px;
  font-family: Inter;
  color: #424242;
  margin-bottom: 8px;
  line-height: 14px;
`;

export const FlexBox = styled.Text`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Icon = styled(Icons)``;
