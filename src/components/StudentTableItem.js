import React from 'react';

export default function StudentItemTable(student) {
    return (
        <>
            <tr>
                <td>{student.student.name}</td>
                <td>{student.student.email}</td>
                <td>
                    <button
                        className="btn btn btn-outline-primary ml-1"
                        type="button"
                    >
                        Editar
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
