import axiosInstance from '../../utils/api';

export const getAula = aulaId => {
  const response = axiosInstance.get(`/aula/${aulaId}`);

  return response;
};

export const getAluno = cpfAluno => {
  const response = axiosInstance.get(`/aluno/${cpfAluno}`);

  return response;
};

export const listarAulas = () => {
  const request = axiosInstance.get('/aula');

  return request;
};