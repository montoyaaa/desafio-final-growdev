import React from 'react';

import AuthService from '../Services/auth.service';

export default function Table({ classItem, deleteLessonUser }) {
    function UserAdmin(props) {
        return (
            <button
                onClick={() => {
                    deleteLessonUser(classItem.id);
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
                <td>{classItem.title}</td>
                <td>
                    {classItem.day}/{classItem.month}
                </td>
                <td>{classItem.hour}</td>
                <td>{classItem.entries}</td>
                <td>
                    <Greeting />
                </td>
            </tr>
        </>
    );
}
