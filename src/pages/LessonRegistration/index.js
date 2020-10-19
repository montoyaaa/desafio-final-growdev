import React from 'react';

import NavMenu from '../../components/NavMenu';
import LessonRegistrationForm from '../../components/LessonRegistrationForm';
import Footer from '../../components/FooterCount';

function ClassRegistration() {
    return (
        <>
            <div className="d-flex flex-column">
                <NavMenu />
                <LessonRegistrationForm />
                <Footer />
            </div>
        </>
    );
}

export default ClassRegistration;
