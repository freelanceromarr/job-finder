import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://jobfinder.coderbiz.com'
})

export default instance;