import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://tarefa-backend3.herokuapp.com'
})
 
export default api;