import React from 'react';

import NavMenu from '../../components/NavMenu';
import Lessons from '../../components/Lessons';
import Footer from '../../components/FooterCount'

function LessonsList() {
    return (
        <>
            <div className="d-flex flex-column">
                <NavMenu />
                <Lessons />
                <Footer />
            </div>
        </>
        )
}

export default LessonsList;
