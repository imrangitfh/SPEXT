import api from './api'

export default {
  register (credentials) {
    return api().post('register', credentials)
  },
  signin (credentials) {
    return api().post('/', credentials)
  },
  getUser (config) {
    return api().get('dashboard', config)
  },
  changeUser (credentials) {
    return api().put('forgot', credentials)
  },
  deleteUser (config) {
    return api().delete('dashboard', config)
  }
}
