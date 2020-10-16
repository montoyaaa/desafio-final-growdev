import React from 'react';

import NavMenu from '../../components/NavMenu';
import Classes from '../../components/Classes';
import Footer from '../../components/FooterCount';

function ClassesList() {
    return (
        <>
            <div className="d-flex flex-column">
                <NavMenu />
                <Classes />
                <Footer />
            </div>
        </>
    );
}

export default ClassesList;
