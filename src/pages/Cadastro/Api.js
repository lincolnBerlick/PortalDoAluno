import axios from 'axios';

const axiosInstance = axios.create({baseURL: 'http://192.168.0.11:8081/'});

export const cadastrarProfessor = professorRequest => {
  axiosInstance.post(professorRequest).then(response => {
    console.log(response.data);
  });
};
