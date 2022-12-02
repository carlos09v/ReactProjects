import axios from 'axios'

const blogFetch = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    // Headers (Cabeçalhos) => Ex: Enviar Token de API
    headers: {
        'Content-Type': "application/json"
    }
})

export default blogFetch