import React, { useState } from 'react';

import AuthService from '../Services/auth.service';

import { Redirect, useHistory } from 'react-router-dom';

export default function LoginUser() {
    AuthService.logout();

    const initialFormState = {
        email: '',
        password: '',
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const [user, setUser] = useState(initialFormState);

    const loginUser = (newUser) => {
        const email = newUser.email;
        const password = newUser.password;
        AuthService.login(email, password).then((header) => {
            history.push('/home');
        });
    };

    let history = useHistory();

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

                            if (!user.email || !user.password) {
                                alert('Email ou Senha Incorretos!');
                            } else {
                                loginUser(user);

                                setUser(initialFormState);
                            }
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
