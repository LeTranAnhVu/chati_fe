import axios from 'axios'
import localstorageUtils from '../utils/localstorageUtils'
import { ACCESS_TOKEN } from '../types'
import { logoutAction } from '../redux/actions/currentUser'
import { store } from '../index'
export const SOCKET_URL = `${process.env.REACT_APP_SERVER_HOST}/chat`

export const backendApi = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_HOST}/api/v1`,
})
backendApi.interceptors.request.use(function (config) {
  config = {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${localstorageUtils.getItem(ACCESS_TOKEN)}`,
    },
  }
  return config
})

backendApi.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response && error.response.status) {
      if (error.response.status === 401) {
        store.dispatch(logoutAction())
        // store.dispatch(openSignInDialogAction())
      }
    }
    return Promise.reject(error)
  }
)
