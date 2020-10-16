import React from 'react';

import TableItem from './ClassesTableItem'

export default function Classes() {
    return (
        <div id="table" className="d-flex flex-column w-50 align-self-center pt-5 pb-5">
            <h2>Suas Turmas</h2>
            <table className="table table-striped m-0 p-0">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Turma</th>
                        <th scope="col">Vagas</th>
                        <th scope="col">Período</th>
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
