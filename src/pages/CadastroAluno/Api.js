import axiosInstance from '../../utils/api';

export const cadastrarAluno = alunoRequest => {
  const request = axiosInstance.post('/aluno', alunoRequest);
  return request;
};

export const buscaFormacoes = () => {
  const request = axiosInstance.get('/escolaridade');

  return request;
};
