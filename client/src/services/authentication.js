import api from './api'

export default {
  register (credentials) {
    return api().post('register', credentials)
  },
  signin (credentials) {
    return api().post('/', credentials)
  }
}
