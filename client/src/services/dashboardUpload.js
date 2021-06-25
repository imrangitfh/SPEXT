import api from './api'

export default {
  fileUpload (credentials) {
    return api().post('dashboard', credentials)
  }
}
