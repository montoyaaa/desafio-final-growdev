import React from 'react';

import imageBg from '../img/square.png';

export default function StudentAdmin() {
    return (
        <div className="d-flex flex-row align-items-top pb-5">
            <div
                id="student-panel"
                className="d-flex flex-column align-items-center w-50 justify-content-center"
            >
                <div className="d-flex align-items-start flex-column new-button pt-5">
                    <h1>Novo Aluno</h1>
                    <a href="/student-reg">
                        <button className="btn btn-outline-primary">
                            <i class="fas fa-plus"></i>
                        </button>
                    </a>
                </div>
            </div>

            <div className="container-3 d-flex flex-column align-items-center justify-content-center w-50">
                <img src={imageBg} alt="light image as background"></img>
                <div className="d-flex align-items-start flex-column dropdown show">
                    <a
                        className="dropdown"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <i className="fas fa-wrench"></i>
                    </a>

                    <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                    >
                        <a className="dropdown-item" href="/students">
                            Gerencie seus Alunos
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
