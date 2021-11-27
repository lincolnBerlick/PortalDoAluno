import React from 'react';
import SituataoStatus from '../SituacaoStatus';

import {Container, AlunoNomeText, Data, Hora, Icon} from './styles';

interface TextTopProps {
  data: string;
  aluno: string;
  situacao: string;
  materia: string;
}

const MiniCard: React.FC<TextTopProps> = ({
  aluno,
  data,
  materia,
  situacao,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <AlunoNomeText>{aluno}</AlunoNomeText>
      <Data>
        <Icon name="calendar" size={13} /> {data}
      </Data>
      <Hora>
        <Icon name="clock" size={13} /> {materia}
      </Hora>
      <SituataoStatus status={situacao}>Situacao</SituataoStatus>
    </Container>
  );
};

export default MiniCard;
