import React from 'react';

export default function Table(classes) {
    return (
        <>
            <tr>
                <td>{classes.classes.name}</td>
                <td>{classes.classes.entries}</td>
                <td>{classes.classes.shift}</td>
                <td>
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
