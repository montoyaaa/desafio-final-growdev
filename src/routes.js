import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Main from './pages/Main';
import Repository from './pages/Repository';
import Login from './pages/Login';
import Register from './pages/Register';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/repository" component={Repository} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    );
}
