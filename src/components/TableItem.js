import React from 'react';

export default function Table(classItem) {
    return (
        <>
            <tr>
                <td>{classItem.classItem.title}</td>
                <td>
                    {classItem.classItem.day}/{classItem.classItem.month}
                </td>
                <td>{classItem.classItem.hour}</td>
                <td>{classItem.classItem.entries}</td>
                <td>
                    <button
                        className="btn btn btn-outline-primary ml-1"
                        type="button"
                    >
                        Entrar
                    </button>
                    <button
                        className="btn btn btn-outline-primary ml-1"
                        type="button"
                    >
                        Excluir
                    </button>
                </td>
            </tr>
        </>
    );
}
