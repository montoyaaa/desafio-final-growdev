import React, { useState } from 'react';

import api from '../Services/api';
import authHeader from '../Services/auth-header';

import TableItem from './TableItem';

const lessonsData = [];

export default function Lessons() {
    const [isMounted, setIsMounted] = useState(false);

    if (!isMounted) {
        api.get('/class', {
            headers: authHeader(),
        }).then((res) => {
            setLessons(res.data);
            setIsMounted(true);
        });
    }

    const [lessons, setLessons] = useState(lessonsData);

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
                    {lessons.map((classItem) => (
                        <TableItem key={classItem.id} classItem={classItem} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
