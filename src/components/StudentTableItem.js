import React from 'react';
import AuthService from '../Services/auth.service';

export default function StudentItemTable({ student, deleteUser }) {
    function UserAdmin(props) {
        return (
            <button
                onClick={() => {
                    deleteUser(student.id);
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
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>
                    <Greeting />
                </td>
            </tr>
        </>
    );
}
