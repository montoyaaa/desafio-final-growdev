import React from 'react';

import BtnLogin from '../components/ButtonLogin';
import NavAdmin from './NavAdmin';

import image from '../img/logo-dark.png';

export default function NavMenu() {
    return (
        <header className="navbar-container d-flex align-items-center justify-content-between">
            <a href="/home">
                <img
                    alt="logo Growdev"
                    id="logo-dark"
                    className="pl-1"
                    src={image}
                ></img>
            </a>
            <NavAdmin />
            <BtnLogin />
        </header>
    );
}
