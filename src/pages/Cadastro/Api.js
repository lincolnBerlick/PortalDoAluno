import axiosInstance from '../../utils/api';

export const cadastrarProfessor = professorRequest => {
  const request = axiosInstance.post('/professor', professorRequest);
  return request;
};

export const buscaGraus = () => {
  const request = axiosInstance.get('/grau');

  return request;
};
