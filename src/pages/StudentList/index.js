import React from 'react';

import NavMenu from '../../components/NavMenu';
import Students from '../../components/Students';
import Footer from '../../components/FooterCount'

function StudentList() {
    return (
        <>
            <div className="d-flex flex-column">
                <NavMenu />
                <Students />
                <Footer />
            </div>
        </>
        )
}

export default StudentList;
