import React from 'react';

export default function StudentItemTable({ student, deleteUser }) {
    return (
        <>
            <tr>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>
                    <button
                        onClick={() => {
                            deleteUser(student.id);
                        }}
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
