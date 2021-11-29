import axiosInstance from '../../utils/api';

export const realizarLogin = (cpf, senha) => {
  const response = axiosInstance.post(`/professor/${cpf}`, senha);

  return response;
};
