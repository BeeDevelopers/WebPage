import React, { Component } from 'react';
import Titulo from './Titulo';

import style from './css/nosotros.module.css';

export default class Nosotros extends Component {
    state = {  }
    render() {
        return (
            <div className={style.nosotros}>
                <Titulo pre_titulo="npm install " titulo="BeeDevelopers" post_titulo="" leyenda="Innovadores."/>
                <div className={style.container}>
                    <img alt="grupo2" src="/img/grupo2.jpeg"/>
                    <p>
                    <h2>Desarrolla tus conocimientos. </h2>
                    Sé parte de esta gran comunidad donde aprenderás desde el lenguaje más básico de programación hasta el uso de los frameworks más modernos.
                    </p>
                </div>
            </div>
        );
    }
}