import axiosInstance from '../../utils/api';

export const realizarLogin = (cpf, senha) => {
  console.log(cpf);
  const response = axiosInstance.post(`/professor/${cpf}`, senha);

  return response;
};
