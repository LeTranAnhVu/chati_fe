import axios from 'axios'
export const SOCKET_URL = 'http://localhost:5000/chat?token=brianle'

export const backendApi = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
})
