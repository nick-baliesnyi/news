import axios from 'axios'

const API = process.env.REACT_APP_BACKEND_BASE_URL

export const newsService = {
  fetch
}

function fetch(page) {
  return axios.get(`${API}/statsAll/`, { withCredentials: true })
    .then((res) => {
      console.log(res.data)
      return res.data
    })
}