import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Main from './pages/Main';
import PanelControl from './pages/AdminPanelControl';
import Login from './pages/Login';
import Register from './pages/Register';
import Lessons from './pages/LessonsList';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/classes-manager" component={PanelControl} />
                <Route path="/lessons" component={Lessons} />
            </Switch>
        </BrowserRouter>
    );
}
