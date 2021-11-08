import React from 'react';
import {Text, TextInputProps} from 'react-native';

import {
  Container,
  ContainerTextInput,
  TextLabel,
  TextInput,
  Icon,
} from './styles';

interface InputProps extends TextInputProps {
  labelText: string;
  icon?: string;
}

const Input: React.FC<InputProps> = ({labelText, icon, ...rest}) => {
  return (
    <Container>
      {labelText && <TextLabel>{labelText}</TextLabel>}
      <ContainerTextInput>
        <TextInput
          keyboardAppearance="dark"
          placeholderTextColor="#666360"
          {...rest}
        />
        {icon && <Icon name={icon} size={20} />}
      </ContainerTextInput>
    </Container>
  );
};

export default Input;
