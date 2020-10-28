import React, { useState } from 'react';

import api from '../Services/api';
import authHeader from '../Services/auth-header';

export default function ClassRegistrationForm() {
    const initialFormState = {
        name: '',
        shift: '',
        entries: '',
    };

    const [class1, setClass] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setClass({ ...class1, [name]: value });
    };

    const addClass = (newClass) => {
        api.post('/class-user', class1, {
            headers: authHeader(),
        }).then((res) => {});
        alert('Nova turma adicionada!');
    };

    return (
        <form className="w-50 align-self-center text-white formReg">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Turma:</label>
                <input
                    value={class1.name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    className="form-control"
                    placeholder="Nome da Turma"
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleCheck1">Período:</label>
                <select
                    value={class1.shift}
                    name="shift"
                    onChange={handleInputChange}
                    className="form-control"
                >
                    <option>Escolha um</option>
                    <option>Manhã</option>
                    <option>Tarde</option>
                    <option>Noite</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="exampleCheck1">Número de Vagas:</label>
                <select
                    value={class1.entries}
                    name="entries"
                    onChange={handleInputChange}
                    className="form-control"
                >
                    <option>Escolha a quantidade de vagas</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>

            <button
                type="submit"
                onClick={(event) => {
                    event.preventDefault();

                    addClass(class1);

                    console.log(class1);

                    setClass(initialFormState);
                }}
                className="btn btn-primary btn-outline-primary col"
            >
                Enviar
            </button>
        </form>
    );
}
