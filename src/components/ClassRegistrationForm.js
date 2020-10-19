import React from 'react';

export default function ClassRegistrationForm() {
    return (
        <form className="w-50 align-self-center text-white formReg">
            <div className="form-group">
                <label for="exampleInputEmail1">Turma:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nome da Turma"
                />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Código da Turma:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Ex. REACT01"
                />
            </div>
            <div className="form-group">
                <label for="exampleCheck1">Período:</label>
                <select className="form-control">
                    <option>Escolha um</option>
                    <option>Manhã</option>
                    <option>Tarde</option>
                    <option>Noite</option>
                </select>
            </div>
            <div className="form-group">
                <label for="exampleCheck1">Número de Vagas:</label>
                <select className="form-control">
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
                className="btn btn-primary btn-outline-primary col"
            >
                Enviar
            </button>
        </form>
    );
}
