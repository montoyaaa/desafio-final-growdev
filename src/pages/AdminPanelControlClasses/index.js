import React from 'react';

import NavMenu from '../../components/NavMenu';
import ClassesAdmin from '../../components/ClassesAdmin';
import Footer from '../../components/FooterCount'

function PanelControl() {
    return (
    <>
            <div className="d-flex flex-column">
                <NavMenu />
                <ClassesAdmin />
                <Footer />
            </div>
        </>
        )
}

export default PanelControl;
