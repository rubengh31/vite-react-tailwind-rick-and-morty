import { Episodes } from '@/models/episodes.model'
import axios from 'axios'
const url: string = 'https://rickandmortyapi.com/api'

export const getEpisodes = () => {
  return axios.get<Episodes>(`${url}/episode`)
}
