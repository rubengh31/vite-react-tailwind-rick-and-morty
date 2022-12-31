import { Characters } from './../models/characters.model';
import axios from 'axios';
const url: string = 'https://rickandmortyapi.com/api';

export const getCharacters = () => {
  return axios.get<Characters>(`${url}/character`);
};
