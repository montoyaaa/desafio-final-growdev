import React, { useState } from 'react';

import api from '../Services/api';
import authHeader from '../Services/auth-header';

import StudentTableItem from './StudentTableItem';

const studentsData = [];

export default function Student() {
    const [isMounted, setIsMounted] = useState(false);

    if (!isMounted) {
        api.get('/users', {
            headers: authHeader(),
        }).then((res) => {
            setStudents(res.data);

            setIsMounted(true);
        });
    }

    const [students, setStudents] = useState(studentsData);

    return (
        <div
            id="table"
            className="d-flex flex-column w-50 align-self-center pt-5 pb-5"
        >
            <h2 className="mt-5">Seus Colegas</h2>
            <table className="table table-striped m-0 p-0">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <StudentTableItem key={student.id} student={student} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
