import {Platform} from 'react-native';
import styled, {css} from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  margin-top: ${Platform.OS === 'android' ? -50 : 0}px; ;
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

export const VerAulasLink = styled.Text`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-decoration-line: underline;
  color: #03a9f4;
  margin-top: 16px;
`;

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
  line-height: 16px;
  text-align: center;
  margin-top: 4px;
`;

export const IconPlus = styled(Feather)`
  font-size: 12px;
  color: #ffffff;
`;
