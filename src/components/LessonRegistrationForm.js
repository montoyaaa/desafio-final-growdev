import React, { useState } from 'react';

import SelectClassItem from './SelectClassItem';

const lessonsData = [];

export default function LessonRegistrationForm() {
    const initialFormState = {
        id: null,
        name: '',
        day: '',
        month: '',
        hour: '',
        entries: '',
        class: '',
    };

    const [lessons, setLessons] = useState(lessonsData);

    const [lesson, setLesson] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLesson({ ...lesson, [name]: value });
    };

    const addLesson = (newLesson) => {
        setLessons([...lessons, lessonsData]);

        alert('Nova aula adicionada!');
    };

    return (
        <form className="w-50 align-self-center text-white formReg">
            <div className="form-group">
                <label for="exampleInputEmail1">Nome da Aula:</label>
                <input
                    type="text"
                    value={lesson.name}
                    name="name"
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Ex. Aula de React"
                />
            </div>
            <div className="form-group">
                <label for="exampleCheck1">Dia:</label>
                <select
                    value={lesson.day}
                    name="day"
                    onChange={handleInputChange}
                    className="form-control"
                >
                    <option>Escolha um dia</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                </select>
            </div>
            <div className="form-group">
                <label for="exampleCheck1">Mês:</label>
                <select
                    value={lesson.month}
                    name="month"
                    onChange={handleInputChange}
                    className="form-control"
                >
                    <option>Escolha um mês</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </select>
            </div>
            <div className="form-group">
                <label for="exampleCheck1">Hora:</label>
                <select
                    value={lesson.hour}
                    name="hour"
                    onChange={handleInputChange}
                    className="form-control"
                >
                    <option>Escolha a hora da aula</option>

                    <option>7h</option>
                    <option>8h</option>
                    <option>9h</option>
                    <option>10h</option>
                    <option>11h</option>
                    <option>---</option>
                    <option>13h</option>
                    <option>14h</option>
                    <option>15h</option>
                    <option>16h</option>
                    <option>17h</option>
                    <option>---</option>
                    <option>19h</option>
                    <option>20h</option>
                    <option>21h</option>
                    <option>22h</option>
                    <option>23h</option>
                </select>
            </div>
            <div className="form-group">
                <label for="exampleCheck1">Número de Vagas:</label>
                <select
                    value={lesson.entries}
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
            <div className="form-group">
                <label for="exampleCheck1">
                    Escolha as turmas que terão acesso à aula:
                </label>
                <select
                    value={lesson.class}
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

                    addLesson(lesson);

                    console.log(lesson);

                    setLesson(initialFormState);
                }}
                type="submit"
                className="btn btn-primary btn-outline-primary col"
            >
                Enviar
            </button>
        </form>
    );
}
