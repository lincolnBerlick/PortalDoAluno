import React from 'react';
import SituataoStatus from '../SituacaoStatus';

import {Container, AlunoNomeText, Data, Hora, Icon, FlexBox} from './styles';

interface TextTopProps {
  data: string;
  aluno: string;
  situacao: string;
  materia: string;
}

const BigCard: React.FC<TextTopProps> = ({
  aluno,
  data,
  situacao,
  materia,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <FlexBox>
        <AlunoNomeText>{aluno}</AlunoNomeText>
        <SituataoStatus status={situacao}>Situacao</SituataoStatus>
      </FlexBox>
      <Data>
        <Icon name="calendar" size={13} /> {data}
      </Data>
      <Hora>
        <Icon name="book" size={13} /> {materia}
      </Hora>
    </Container>
  );
};

export default BigCard;
