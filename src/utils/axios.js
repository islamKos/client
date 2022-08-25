import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3003/api',
})

instance.interceptors.request.use((config) => {
  config.headers.Autorization = window.localStorage.getItem('token')

  return config
})

export default instance