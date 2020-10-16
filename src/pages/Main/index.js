import React from 'react';

import NavMenuLogin from '../../components/NavMenuLogin';
import Home from '../../components/Home';

function Main() {
    return (
        <>
            <div className="d-flex flex-column">
                <NavMenuLogin />
                <Home />
            </div>
        </>
    );
}

export default Main;
