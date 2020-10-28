import React, { useState } from 'react';

import AuthenticationService from '../Services/AuthenticationService';
import StorageProvider from '../Services/StorageProvider';
import jsonWebTokenService from 'jsonwebtoken';

import api from '../Services/api';

export default function LoginUser() {
    const initialFormState = {
        token: null,
        email: '',
        password: '',
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const auth = AuthenticationService;
    const localForage = StorageProvider;

    const saveJwt = async (jwt) => {
        try {
            if (jwt) {
                const decodedJwt = jsonWebTokenService.decode(jwt);
                await localForage.setItem('jwt_usuario', jwt);
                await localForage.setItem('dados_usuario', decodedJwt);
                return true;
            }
        } catch (err) {
            if (err instanceof jsonWebTokenService.JsonWebTokenError) {
                return false;
            }
            throw err;
        }
    };

    const [user, setUser] = useState(initialFormState);

    const loginUser = (newUser) => {
        api.post('/login', user).then((res) => {
            const jwt = auth.doLogin(newUser.email, newUser.password);

            saveJwt(jwt);

            setUser([...user, res.data]);
        });
    };

    return (
        <div
            id="login-form"
            className="d-flex justify-content-center align-self-center"
        >
            <form className="d-flex flex-column">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        value={user.email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        value={user.password}
                        name="password"
                        onChange={handleInputChange}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                    />
                </div>
                <div className="d-flex flex-row row w-100 m-0">
                    <button
                        onClick={(event) => {
                            event.preventDefault();

                            loginUser(user);

                            console.log(user);

                            setUser(initialFormState);
                        }}
                        type="submit"
                        className="btn btn-primary btn-outline-primary col"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}
