import axios from 'axios'

const http = axios.create({
  timeout: 5000,
  baseURL: import.meta.env.VITE_BASE_URL,
})

export default http
