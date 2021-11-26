import { mapInfosFormalization } from './formalization.mappers'
import axios from 'axios'

const BASE_URL = process.env.VUE_APP_BASE_URL

export const getInfos = () => axios
    .get(BASE_URL + '5fcf051d-2867-4698-8c1c-df076b4d2948')
    .then(response => mapInfosFormalization(response.data))