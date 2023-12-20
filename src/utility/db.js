import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jobfinder.coderbiz.com'
})

export default instance;