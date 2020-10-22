import React from 'react';

export default function BtnLogin() {
    function UserLogin(props) {
        return (
            <a href="/login" className="m-3 btn btn-outline-primary">
                Logout
            </a>
        );
    }

    function UserLogout(props) {
        return (
            <a href="/login" className="m-3 btn btn-outline-primary">
                Login
            </a>
        );
    }

    function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
            return <UserLogin />;
        }
        return <UserLogout />;
    }

    return <Greeting isLoggedIn={false} />;
}
