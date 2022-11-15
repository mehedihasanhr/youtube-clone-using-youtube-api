import axios from 'axios'
import config  from '../config'


const AxiosLib = axios.create({
    baseURL: config.API_URL,
    params: {
        key: config.API_KEY,
    },
    headers: {
        'Content-Type': 'application/json'
    },
})


export default AxiosLib;