import styled, {css} from 'styled-components/native';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Situacao {
  pendente: string;
}

export const Container = styled.View<Situacao>`
  border-radius: 16px;
  height: 22px;
  background-color: ${props =>
    props.pendente === 'pendente' ? '#F08080' : '#68C894'};
  text-align: center;
  justify-content: center;
  align-content: center;
  align-self: baseline;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
`;

export const SituacaoText = styled.Text`
  font-size: 12px;
  color: #ffffff;
  font-family: Inter;
  line-height: 14px;
`;
