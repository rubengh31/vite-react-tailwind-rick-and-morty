import { Locations } from '@/models/locations.model'
import axios from 'axios'
const url: string = 'https://rickandmortyapi.com/api'

export const getLocations = () => {
  return axios.get<Locations>(`${url}/location`)
}
