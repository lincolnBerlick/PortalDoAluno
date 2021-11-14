import styled, {css} from 'styled-components/native';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View``;

export const ContainerTextInput = styled.View`
  width: 311px;
  height: 47px;
  padding: 0 16px;
  background-color: #ffffff;
  border-radius: 10px;
  border-width: 2px;
  border: 1px solid #eaeaeb;
  box-sizing: border-box;
  border-radius: 9px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: left;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: Inter;
  margin-left: 16px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
`;

export const TextLabel = styled.Text`
  font-size: 14px;
  color: #424242;
  font-family: Inter;
  margin-bottom: 4px;
  margin-left: 3px;
  align-self: flex-start;
  margin-top: 24px;
`;

export const Icon = styled(CommunityIcons)``;
