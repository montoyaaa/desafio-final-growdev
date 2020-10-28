import React, { useState } from 'react';

import TableItem from './ClassesTableItem';

import api from '../Services/api';
import authHeader from '../Services/auth-header';

const classesData = [];

export default function Classes() {
    const [isMounted, setIsMounted] = useState(false);

    if (!isMounted) {
        api.get('/class-user', {
            headers: authHeader(),
        }).then((res) => {
            setClasses(res.data);

            setIsMounted(true);
        });
    }

    const [classes, setClasses] = useState(classesData);

    return (
        <div
            id="table"
            className="d-flex flex-column w-50 align-self-center pt-5 pb-5"
        >
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
                    {classes.map((classes) => (
                        <TableItem key={classes.id} classes={classes} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
