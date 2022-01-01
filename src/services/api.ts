import axios from 'axios'

export const getError = (error: { response: { status: number } }) => {
  if (error.response.status === 401 || error.response.status === 500) {
    window.location.href = '/indisponivel'
    return Promise.reject(error.response)
  }

  return Promise.reject(error.response)
}

export const useAPI = () => {
  const baseURL = 'http://localhost:3000/api'
  const api = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer`,
      'Content-Type': 'application/json',
    },
  })

  api.interceptors.response.use((response) => response, getError)

  return api
}
