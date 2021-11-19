import React from 'react';
import SituataoStatus from '../SituacaoStatus';

import {Container, AlunoNomeText, Data, Hora, Icon} from './styles';

interface TextTopProps {
  data: string;
  aluna: string;
  situacao: string;
  hora: string;
}

const MiniCard: React.FC<TextTopProps> = ({
  aluna,
  data,
  situacao,
  hora,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <AlunoNomeText>{aluna}</AlunoNomeText>
      <Data>
        <Icon name="calendar" size={13} /> {data}
      </Data>
      <Hora>
        <Icon name="clock" size={13} /> {hora}
      </Hora>
      <SituataoStatus status={situacao}>Situacao</SituataoStatus>
    </Container>
  );
};

export default MiniCard;
