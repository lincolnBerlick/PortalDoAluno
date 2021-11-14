import React, {Children} from 'react';
import {Text, TextInputProps, TextProps} from 'react-native';

import {Container, TextTopper} from './styles';

interface TextTopProps extends TextProps {
  sizeText: number;
  children: string;
}

const TextTop: React.FC<TextTopProps> = ({sizeText, children, ...rest}) => {
  return (
    <Container>
      {children && (
        <TextTopper fontSize={sizeText} {...rest}>
          {children}
        </TextTopper>
      )}
    </Container>
  );
};

export default TextTop;
