import axios from 'axios'

const createInstance = axios.create({
  baseURL: 'http://localhost:9000',
})

export default createInstance
