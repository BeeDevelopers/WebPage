import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './Header';
import Separador from './Separador';


export default class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    {/* <Route exact path="/"component={Home} /> */}
                    {/* <Route component={Error}/> */}
                </Switch>
                <Separador title="Pensado por y para estudiantes"></Separador>

            </BrowserRouter>
        );
    }
}