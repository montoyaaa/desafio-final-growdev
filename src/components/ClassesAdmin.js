import React from 'react';

import imageBg from '../img/square.png'

export default function ClassesAdmin() {
    return (
            <div className="d-flex flex-row align-items-top pb-5">
                <div className="d-flex flex-column align-items-center w-50">
                    <div className="d-flex align-items-start flex-column new-button pt-5">
                        <h1>Nova Aula</h1>
                        <button className="btn btn-outline-primary"><i class="fas fa-plus"></i></button>
                    </div>

                    <div className="d-flex align-items-start flex-column new-button pt-5">
                        <h1>Nova Turma</h1>
                        <button className="btn btn-outline-primary"><i class="fas fa-plus"></i></button>
                    </div>
                </div>

                <div className="container-3 d-flex flex-column align-items-center justify-content-center w-50">
                    <img src={imageBg} alt="light image as background"></img>
                    <div className="d-flex align-items-start flex-column dropdown show">
                            <a className="dropdown" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-wrench"></i>
                            </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="/lessons">Gerencie suas Aulas</a>
                            <a className="dropdown-item" href="/classes">Gerencie suas Turmas</a>
                        </div>
                    </div>
                </div>
            </div>

    );
}
