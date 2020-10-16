import React from 'react';

import BtnLogin from '../components/ButtonLogin';
import image from '../img/logo-dark.png';

export default function NavMenu() {
    return (
        <header className="navbar-container d-flex align-items-center justify-content-between">
            <a href="/">
                <img
                    alt="logo Growdev"
                    id="logo-dark"
                    className="pl-1"
                    src={image}
                ></img>
            </a>
            <nav className="">
                <a href="/" className="m-3 p-3">
                    Home
                </a>
                <a href="/classes-manager" className="m-3 p-3">
                    Aulas
                </a>
                <a href="/student-manager" className="m-3 p-3">
                    Alunos
                </a>
            </nav>
            <BtnLogin />
        </header>
    );
}
