import React from 'react';
import image from '../img/logo-dark.png'

export default function NavMenuLogin() {
    return (
        <header className="navbar-container d-flex align-items-center justify-content-between">
                <a href="/">
                    <img id="logo-dark" className="pl-1" src={image}></img>
                </a>
            <nav className="">
                <a href="/" className="m-3">Home</a>
                <a href="/" className="m-3">Aulas</a>
                <a href="/" className="m-3">Alunos</a>
            </nav>
                <a href="/" id="btn-login" className="m-3 btn btn-outline-primary">Login</a>
        </header>
    );
}
