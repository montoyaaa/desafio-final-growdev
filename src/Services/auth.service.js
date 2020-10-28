import axios from 'axios';

const API_URL = 'https://api-growdev-classroom.herokuapp.com/';

class AuthService {
    login(email, password) {
        return axios
            .post(API_URL + 'login', {
                email,
                password,
            })
            .then((response) => {
                if (response.data.token) {
                    console.log(response.data);
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(is_admin, name, email, password, class_user_id) {
        return axios.post(API_URL + 'users', {
            is_admin,
            name,
            email,
            password,
            class_user_id,
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();
