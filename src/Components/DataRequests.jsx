import axios from "axios";

const baseURL = "https://guineapig-sanctuary.herokuapp.com/api";
const url = "v1/animal";

export const getAnimals = () => {
  return axios.get(`${baseURL}/${url}`).then(({ data }) => {
    return data;
  });
};

export const getIndividualAnimal = (id) => {
  return axios.get(`${baseURL}/${url}/${id}`).then(({ data }) => {
    return data;
  });
};

export const putAnimal = (id, animal) => {
  return axios.put(`${baseURL}/${url}/${id}`, animal).then(({ data }) => {
    return data;
  });
};

export const postAnimal = (animal) => {
  return axios.post(`${baseURL}/${url}`, animal).then(({ data }) => {
    return data;
  });
};

export const deleteAnimal = (id) => {
  return axios.delete(`${baseURL}/${url}/${id}`).then(({ data }) => {
    return data;
  });
};
