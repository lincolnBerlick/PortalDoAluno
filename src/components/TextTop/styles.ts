import styled, {css} from 'styled-components/native';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
interface TextTopProps {
  fontSize: number;
}

export const Container = styled.View`
  width: 100%;
  margin-top: 74px;
`;

export const TextTopper = styled.Text<TextTopProps>`
  font-size: ${props => props.fontSize || '20px'};
  color: #03a9f4;
  font-family: Inter;
  font-weight: bold;
  margin-bottom: 4px;
  margin-left: 3px;
  margin-top: 24px;
`;
