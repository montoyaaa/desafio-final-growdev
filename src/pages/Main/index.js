import React from 'react';

import NavMenuLogin from '../../components/NavMenuLogin';
import Welcome from '../../components/Welcome';

function Main() {
    return (
        <>
            <div className="d-flex flex-column">
                <NavMenuLogin />
                <Welcome />
            </div>
        </>
    );
}

export default Main;
