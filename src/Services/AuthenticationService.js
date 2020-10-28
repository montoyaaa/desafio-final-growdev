import api from './api';

export default class AuthenticationService {
    async doLogin(user, pass) {
        try {
            const requestOptions = {
                headers: {
                    Authorization: `Bearer`,
                },
                validateStatus: (status) => status < 500,
            };
            const { data: jwt, status } = await api.get(
                `/login`,
                requestOptions
            );
            if (status === 401) throw new Error('Usuário ou senha inválidos');
            return jwt;
        } catch (err) {
            throw err;
        }
    }
}
