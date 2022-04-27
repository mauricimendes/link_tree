import axios from "axios"

export const api_git = axios.create({
    baseURL: 'https://api.github.com/users'
})

export const api = axios.create({
    baseURL: ''
})

