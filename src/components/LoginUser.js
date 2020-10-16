import React from 'react';

export default function LoginUser() {
    return (
        <div
            id="login-form"
            className="d-flex justify-content-center align-self-center"
        >
            <form className="d-flex flex-column">
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                    />
                </div>
                <div className="d-flex flex-row row w-100 m-0">
                    <a
                        href="/register"
                        type="submit"
                        className="btn btn-secondary col"
                    >
                        Criar Conta
                    </a>
                    <button
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
