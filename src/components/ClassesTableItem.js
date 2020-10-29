import React from 'react';
import AuthService from '../Services/auth.service';

export default function Table(props) {
    function UserAdmin(props) {
        return (
            <button
                onClick={() => {
                    props.deleteClassUser(props.classes.id);
                }}
                className="btn btn btn-outline-primary ml-1"
                type="button"
            >
                Excluir
            </button>
        );
    }

    function UserExist(props) {
        return <></>;
    }

    function Greeting(props) {
        const isLoggedIn = localStorage.getItem('user');

        if (isLoggedIn) {
            const user = AuthService.getCurrentUser();
            if (user.user.is_admin) {
                return <UserAdmin />;
            }
        }
        return <UserExist />;
    }

    return (
        <>
            <tr>
                <td>{props.classes.name}</td>
                <td>{props.classes.entries}</td>
                <td>{props.classes.shift}</td>
                <td>{props.classes.id}</td>
                <td>
                    <Greeting />
                </td>
            </tr>
        </>
    );
}
