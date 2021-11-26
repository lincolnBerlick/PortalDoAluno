import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://10.0.2.2:3000',
});

export const cadastrarProfessor = professorRequest => {
  const request = axiosInstance.post('/professor', professorRequest);
  return request;
};

export const buscaGraus = () => {
  const request = axiosInstance.get('/grau');

  return request;
};
