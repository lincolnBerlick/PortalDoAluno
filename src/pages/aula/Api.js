import axiosInstance from '../../utils/api';

export const getAula = aulaId => {
  const response = axiosInstance.get(`/aula/${aulaId}`);

  return response;
};

export const listarAlunos = () => {
  const request = axiosInstance.get('/aluno');

  return request;
};
