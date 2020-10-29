import React, { useState } from 'react';
import api from '../Services/api';

import authHeader from '../Services/auth-header';

const lessonsData = [];

export default function Footer() {
    const [isMounted, setIsMounted] = useState(false);

    const [lessons, setLessons] = useState(lessonsData);

    if (!isMounted) {
        api.get('/class', {
            headers: authHeader(),
        }).then((res) => {
            setLessons(res.data);
            setIsMounted(true);
        });
    }

    return (
        <footer
            id="home-footer"
            className="d-flex flex-row align-items-center justify-content-center"
        >
            <h2 className="p-3 m-0 mb-1">
                Você tem <span>{lessons.length}</span> Aulas Disponíveis!
            </h2>
        </footer>
    );
}
