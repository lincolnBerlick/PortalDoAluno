import axiosInstance from '../../utils/api';

export const getAulaAlunos = alunoCpf => {
  const response = axiosInstance.get(`/aluno/${alunoCpf}`);

  return response;
};
