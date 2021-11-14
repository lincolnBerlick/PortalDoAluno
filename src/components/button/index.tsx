import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';

import {Container, ButtonText, Icon} from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({children, icon, ...rest}) => (
  <Container {...rest}>
    <ButtonText>
      {' '}
      {icon && <Icon name={icon} size={15} />} {children}
    </ButtonText>
  </Container>
);

export default Button;
