import React from 'react';
import SituataoStatus from '../SituacaoStatus';

import {Container, AlunoNomeText, Data, Hora, Icon, FlexBox} from './styles';

interface TextTopProps {
  data: string;
  aluna: string;
  situacao: string;
  hora: string;
}

const BigCard: React.FC<TextTopProps> = ({
  aluna,
  data,
  situacao,
  hora,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <FlexBox>
        <AlunoNomeText>{aluna}</AlunoNomeText>
        <SituataoStatus status={situacao}>Situacao</SituataoStatus>
      </FlexBox>
      <Data>
        <Icon name="calendar" size={13} /> {data}
      </Data>
      <Hora>
        <Icon name="clock" size={13} /> {hora}
      </Hora>
    </Container>
  );
};

export default BigCard;
