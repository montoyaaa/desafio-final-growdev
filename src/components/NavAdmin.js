import React from 'react';

import AuthService from '../Services/auth.service';

export default function NavAdmin() {
    function UserAdmin(props) {
        return (
            <nav className="">
                <a href="/home" className="m-3 p-3">
                    Home
                </a>
                <a href="/classes-manager" className="m-3 p-3">
                    Aulas
                </a>
                <a href="/student-manager" className="m-3 p-3">
                    Alunos
                </a>
            </nav>
        );
    }

    function UserExist(props) {
        return (
            <nav className="">
                <a href="/home" className="m-3 p-3">
                    Home
                </a>
                <a href="/lessons" className="m-3 p-3">
                    Aulas
                </a>
                <a href="/students" className="m-3 p-3">
                    Alunos
                </a>
            </nav>
        );
    }
    function NoUser(props) {
        return (
            <nav className="">
                <a href="/home" className="m-3 p-3">
                    Home
                </a>
                <a href="/login" className="m-3 p-3">
                    Aulas
                </a>
                <a href="/login" className="m-3 p-3">
                    Alunos
                </a>
            </nav>
        );
    }

    function Greeting(props) {
        const isLoggedIn = localStorage.getItem('user');

        if (isLoggedIn) {
            const user = AuthService.getCurrentUser();
            if (user.user.is_admin) {
                return <UserAdmin />;
            } else if (user) {
                return <UserExist />;
            } else if (user == null) {
            }
        }
        return <NoUser />;
    }

    return <Greeting />;
}
