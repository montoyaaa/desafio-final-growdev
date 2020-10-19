import React from 'react';

import NavMenu from '../../components/NavMenu';
import StudentRegistrationForm from '../../components/StudentRegistrationForm';
import Footer from '../../components/FooterCount';

function ClassRegistration() {
    return (
        <>
            <div className="d-flex flex-column">
                <NavMenu />
                <StudentRegistrationForm />
                <Footer />
            </div>
        </>
    );
}

export default ClassRegistration;
