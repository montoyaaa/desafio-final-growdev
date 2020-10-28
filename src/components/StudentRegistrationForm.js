import React, { useState } from 'react';

import SelectClassItem from './SelectClassItem';
import AuthService from '../Services/auth.service';
import api from '../Services/api';
import authHeader from '../Services/auth-header';

const classesData = [];

export default function StudentRegistrationForm() {
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

    const initialFormState = {
        is_admin: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        class_user_id: '',
    };

    const [student, setStudent] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setStudent({ ...student, [name]: value });
    };

    const addStudent = (newUser) => {
        const is_admin = newUser.is_admin;
        const name = newUser.name;
        const email = newUser.email;
        const password = newUser.password;
        const class_user_id = newUser.class_user_id;
        AuthService.register(is_admin, name, email, password, class_user_id);
    };

    return (
        <form className="w-50 align-self-center text-white formReg">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Nome do Aluno:</label>
                <input
                    type="text"
                    value={student.name}
                    name="name"
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Insira o Nome do Aluno"
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email do Aluno:</label>
                <input
                    type="email"
                    value={student.email}
                    name="email"
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Insira o Email do Aluno"
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Senha do Aluno:</label>
                <input
                    type="password"
                    value={student.password}
                    name="password"
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Insira a Senha do Aluno"
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                    Confirmar Senha do Aluno:
                </label>
                <input
                    type="password"
                    value={student.confirmPassword}
                    name="confirmPassword"
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Confirme a Senha do Aluno"
                />
            </div>

            <div className="form-group">
                <label htmlFor="exampleCheck1">
                    Escolha a turma que o aluno irá participar:
                </label>
                <select
                    value={student.class_user_id}
                    name="class_user_id"
                    onChange={handleInputChange}
                    className="form-control"
                >
                    <option>Escolha a turma</option>
                    {classes.map((classes) => (
                        <SelectClassItem key={classes.id} classes={classes} />
                    ))}
                </select>
            </div>

            <button
                onClick={(event) => {
                    event.preventDefault();

                    addStudent(student);
                    console.log(student);

                    setStudent(initialFormState);
                }}
                type="submit"
                className="btn btn-primary btn-outline-primary col"
            >
                Enviar
            </button>
        </form>
    );
}
