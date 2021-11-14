import styled, {css} from 'styled-components/native';
import Icons from 'react-native-vector-icons/Feather';

interface SubTitleSize {
  subTitleSize: number;
}

export const TextSubTitle = styled.Text<SubTitleSize>`
  font-size: ${props => (props.subTitleSize ? props.subTitleSize : '20px')};
  color: #75848f;
  font-family: 'Inter';
  font-weight: bold;
  line-height: ${props => (props.subTitleSize ? props.subTitleSize : '20px')};
  margin-top: 35px;
  margin-bottom: 16px;
  align-self: flex-start;
`;
