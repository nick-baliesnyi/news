import axios from 'axios'

const API = process.env.REACT_APP_BACKEND_BASE_URL

export const userService = {
  login,
  logout,
}

function login(username, password) {
  var formData = new FormData()
  formData.append('username', username)
  formData.append('password', password)

  return axios.post(`${API}/auth/`, formData)
    .then((res) => {
      console.log(res.data)
      return res.data
    })
}

function logout() {
  localStorage.removeItem('user')
}

function checkAuth() {
  // return axios.get()
}