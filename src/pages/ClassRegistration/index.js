import React from 'react';

import NavMenu from '../../components/NavMenu';
import ClassRegistrationForm from '../../components/ClassRegistrationForm';
import Footer from '../../components/FooterCount';

function ClassRegistration() {
    return (
        <>
            <div className="d-flex flex-column">
                <NavMenu />
                <ClassRegistrationForm />
                <Footer />
            </div>
        </>
    );
}

export default ClassRegistration;
