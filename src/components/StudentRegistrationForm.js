import React, { useState } from 'react';

import SelectClassItem from './SelectClassItem';

export default function StudentRegistrationForm() {
    const initialFormState = {
        id: null,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        class: '',
    };

    const [student, setStudent] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setStudent({ ...student, [name]: value });
    };

    const addStudent = (newStudent) => {
        alert('Novo aluno adicionado!');
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
                <label for="exampleCheck1">
                    Escolha a turma que o aluno irá participar:
                </label>
                <select
                    value={student.class}
                    name="class"
                    onChange={handleInputChange}
                    className="form-control"
                >
                    <option>Escolha a turma</option>
                    <SelectClassItem />
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
