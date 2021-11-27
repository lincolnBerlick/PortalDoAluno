import axiosInstance from '../../utils/api';

export const listarAlunos = () => {
  const request = axiosInstance.get('/aluno');

  return request;
};

export const listarAulas = () => {
  const request = axiosInstance.get('/aula');

  return request;
};
