import axios from "axios"

const axiosClient = axios
axiosClient.defaults.baseURL = import.meta.env.VITE_API_DOMAIN
axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
}
//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000
// axiosClient.defaults.withCredentials = true

export function getRequest(URI) {
  return axiosClient.get(`/${URI}`).then(response => response)
}

export function postRequest(URI, payload) {
  return axiosClient.post(`/${URI}`, payload).then(response => response);
}

export function patchRequest(URI, payload) {
  return axiosClient.patch(`/${URI}`, payload).then(response => response);
}

export function deleteRequest(URI) {
  return axiosClient.delete(`/${URI}`).then(response => response);
}