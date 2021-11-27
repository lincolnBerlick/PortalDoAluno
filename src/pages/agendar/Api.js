import axiosInstance from '../../utils/api';

export const agendarAula = dadosAula => {
  const request = axiosInstance.post('/aula', dadosAula);

  return request;
};

export const fetchAllMaterias = () => {
  const request = axiosInstance.get('/ensino');

  return request;
};

export const fetchEnsino = ensinoId => {
  const request = axiosInstance.get(`/ensino/${ensinoId}`);

  return request;
};

export const listarAlunos = () => {
  const request = axiosInstance.get('/aluno');

  return request;
};

export const returnEnumMaterias = async () => {
  const {data: ensinos} = await fetchAllMaterias();
  const formattedArray = [];

  await Promise.all(
    ensinos.map(async ensino => {
      const {
        data: {materia},
      } = await fetchEnsino(ensino.id);
      delete materia.professoresQueEnsinam;

      formattedArray.push(materia);
    }),
  );

  return formattedArray;
};
