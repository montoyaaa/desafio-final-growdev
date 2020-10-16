import React from 'react';

import NavMenu from '../../components/NavMenu';
import Home from '../../components/Home';

function Main() {
    return (
        <>
            <div className="d-flex flex-column">
                <NavMenu />
                <Home />
            </div>
        </>
    );
}

export default Main;
