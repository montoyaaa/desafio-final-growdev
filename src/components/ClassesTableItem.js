import React from 'react';

export default function Table() {
    return (
        <>
            <tr>
                <td>A</td>
                <td>00/10</td>
                <td>Tarde</td>
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
