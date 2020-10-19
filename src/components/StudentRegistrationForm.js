import React from 'react';

export default function StudentRegistrationForm() {
    return (
        <form className="w-50 align-self-center text-white formReg">
            <div className="form-group">
                <label for="exampleInputEmail1">Nome do Aluno:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Insira o Nome do Aluno"
                />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Senha do Aluno:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Insira a Senha do Aluno"
                />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">
                    Confirmar Senha do Aluno:
                </label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Confirme a Senha do Aluno"
                />
            </div>

            <label for="exampleCheck1">
                Escolha a turma que o aluno irá participar:
            </label>
            <div className="form-group">
                <label for="exampleCheck1">Turma A</label>
                <input
                    className="m-1"
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                />
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
