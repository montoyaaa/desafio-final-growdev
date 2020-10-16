import React from 'react';

import TableItem from './TableItem';

export default function Lessons() {
    return (
        <div
            id="table"
            className="d-flex flex-column w-50 align-self-center pt-5 pb-5"
        >
            <h2>Suas Aulas</h2>
            <table className="table table-striped m-0 p-0">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Aula</th>
                        <th scope="col">Dia</th>
                        <th scope="col">Hora</th>
                        <th scope="col">Vagas</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <TableItem />
                </tbody>
            </table>
        </div>
    );
}
