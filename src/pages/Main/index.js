import React from 'react';

import NavMenu from '../../components/NavMenu';
import Home from '../../components/Home';
import Footer from '../../components/FooterCount';

function Main() {
    return (
        <>
            <div className="d-flex flex-column">
                <NavMenu />
                <Home />
                <Footer />
            </div>
        </>
    );
}

export default Main;
