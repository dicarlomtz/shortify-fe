import { APP_API_URL } from '../constants'
import axios from 'axios'

export const instance = axios.create({
  baseURL: APP_API_URL,
  timeout: 5000
})
