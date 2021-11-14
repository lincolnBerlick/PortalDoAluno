import React, {Children} from 'react';
import {Text, TextInputProps, TextProps} from 'react-native';

import {Container, SituacaoText} from './styles';

interface TextTopProps {
  status: string;
}

const SituataoStatus: React.FC<TextTopProps> = ({status}) => {
  return (
    <Container pendente={status}>
      <SituacaoText>
        {'$ '} {status}
      </SituacaoText>
    </Container>
  );
};

export default SituataoStatus;
