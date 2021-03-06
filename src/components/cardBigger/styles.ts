import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 311px;
  height: 110px;
  background-color: #ffffff;
  border-radius: 8px;
  padding-top: 16px;
  padding-left: 15px;
  margin-bottom: 15px;
`;

export const AlunoNomeText = styled.Text`
  font-size: 20px;
  color: #424242;
  font-weight: bold;
  font-family: Inter;
  padding: 0;
`;

export const Data = styled.Text`
  font-size: 14px;
  font-family: Inter;
  color: #424242;
  margin-bottom: 4px;
`;

export const Hora = styled.Text`
  font-size: 14px;
  font-family: Inter;
  color: #424242;
  margin-bottom: 8px;
`;

export const FlexBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-right: 15px;
`;

export const Icon = styled(Icons)``;
