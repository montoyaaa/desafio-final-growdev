import React from 'react';

import image from '../img/logo-dark.png';
import imageBg from '../img/shadow_ellipse-1450.webp';

export default function Home() {
    return (
        <>
            <div id="container-home" className="d-flex flex-row">
                <div className="welcomeMessage d-flex flex-column align-items-center justify-content-center">
                    <h1>
                        Bem Vindo <br /> Growdever!
                    </h1>
                    <p className="pl-4">
                        Comece criando uma conta para ter acesso as aulas
                        postadas pelos seus mentores!
                    </p>
                </div>
                <div className="welcomeMessage1 d-flex flex-column align-items-center justify-content-center">
                    <img id="imageLogo" src={image}></img>
                    <img src={imageBg}></img>
                </div>
            </div>
        </>
    );
}
