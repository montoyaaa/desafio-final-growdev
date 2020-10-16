import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Main from './pages/Main';
import AdminPanelControlClasses from './pages/AdminPanelControlClasses';
import Login from './pages/Login';
import Register from './pages/Register';
import Lessons from './pages/LessonsList';
import Classes from './pages/ClassesList';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/classes-manager" component={AdminPanelControlClasses} />
                <Route path="/lessons" component={Lessons} />
                <Route path="/classes" component={Classes} />
            </Switch>
        </BrowserRouter>
    );
}
