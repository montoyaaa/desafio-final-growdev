import React from 'react';

import NavMenu from '../../components/NavMenu';
import StudentAdmin from '../../components/StudentAdmin';
import Footer from '../../components/FooterCount';

function StudentPanelControl() {
    return (
        <>
            <div className="d-flex flex-column">
                <NavMenu />
                <StudentAdmin />
                <Footer />
            </div>
        </>
    );
}

export default StudentPanelControl;
