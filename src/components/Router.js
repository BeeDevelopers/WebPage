import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Eventos from './Eventos';
import Contacto from './Contacto';
// import Noticias from './Noticias';
import Nosotros from './Nosotros';
import Conducta from './Conducta';
import Devteam from './Devteam';
import Integrante from './Integrante';

import Error from './Error';

export default class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Header />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/eventos" component={Eventos} />
                    <Route exact path="/contacto" component={Contacto} />
                    {/* <Route exact path="/noticias" component={Noticias} /> */}
                    <Route exact path="/devteam" component={Devteam} />
                    <Route exact path="/devteam/:nombre" component={Integrante} />
                    <Route exact path="/nosotros" component={Nosotros} />
                    <Route exact path="/conducta" component={Conducta} />
                    {/* <Route exact path="/"component={Home} /> */}
                    <Route component={Error}/>
                </Switch>

                <Header />
            </BrowserRouter>
        );
    }
}