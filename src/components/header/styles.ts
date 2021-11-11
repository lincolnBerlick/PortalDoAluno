import styled, {css} from 'styled-components/native';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  margin-top: 20%;
  align-self: flex-start;
`;

export const TextLabel = styled.Text`
  font-size: 20px;
  color: #03a9f4;
  font-family: 'Inter';
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.5em;
  text-decoration-color: #03a9f4;
`;

export const Icon = styled(CommunityIcons)``;
