import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const promise = axios.get(baseUrl)
    return promise.then(response => response.data)
}

const create = (newData) => {
    const promise = axios.post(baseUrl, newData)
    return promise.then(response => response.data)
} 
const deleteUser = id => {
    const promise = axios.delete(`${baseUrl}/${id}`)
    return promise.then(response => response.data)
}

const updateNumber = (id, newObject) => {
    const promise = axios.put(`${baseUrl}/${id}`, newObject)
    return promise.then(response => response.data)
}


export default {getAll, create, deleteUser, updateNumber}

