import React, { useState } from 'react';

const usersData = [];

export default function LoginUser() {
    const initialFormState = {
        token: null,
        email: '',
        password: '',
    };

    const [users, setUsers] = useState(usersData);

    const [user, setUser] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const addUser = (newUser) => {
        setUsers([...users, usersData]);
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

                            addUser(user);

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
