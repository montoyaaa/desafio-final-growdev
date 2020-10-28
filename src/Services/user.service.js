import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://api-growdev-classroom.herokuapp.com/';

class UserService {
    getPublicContent() {
        return axios.get(API_URL);
    }

    getUserBoard() {
        return axios.get(API_URL + 'class', {
            headers: authHeader(),
        });
    }

    getAdminBoard() {
        return axios.get(API_URL + 'classes-manager', {
            headers: authHeader(),
        });
    }
}

export default new UserService();
