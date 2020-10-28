import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-growdev-classroom.herokuapp.com',
});

export default api;
