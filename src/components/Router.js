import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


export default class Router extends Component {

    render() {
        return (
            <BrowserRouter>

                <Switch>
                    {/* <Route exact path="/"component={Home} /> */}
                    {/* <Route component={Error}/> */}
                </Switch>

            </BrowserRouter>
        );
    }
}