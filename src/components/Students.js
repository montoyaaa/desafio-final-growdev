import React, { useState } from 'react';

import StudentTableItem from './StudentTableItem';
import AdminTableItem from './AdminTableItem';

const studentsData = [];

const adminsData = [];

export default function Student() {
    const [students, setStudents] = useState(studentsData);

    const [admins, setAdmins] = useState(adminsData);

    return (
        <div
            id="table"
            className="d-flex flex-column w-50 align-self-center pt-5 pb-5"
        >
            <h2>Seus Professores</h2>
            <table className="table table-striped m-0 p-0">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Turma</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {admins.map((admin) => (
                        <AdminTableItem />
                    ))}
                </tbody>
            </table>
            <h2 className="mt-5">Seus Colegas</h2>
            <table className="table table-striped m-0 p-0">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Turma</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <StudentTableItem />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
