import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
});

export const searchGitHub = (query = '') => (
  API.get(`/search/users?q=${query}`)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(`${response.status}: ${response.statusText}`);
    })
);

export const getUser = (username) => (
  API.get(`/users/${username}`)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(`${response.status}: ${response.statusText}`);
    })
);