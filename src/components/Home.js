import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from './css/home.module.css';

import Boton from './Boton';

export default class Home extends Component {
    render() {
        return (
            <div className={styles.home}>
                <div className={styles.cabecera}>
                    <div className={styles.cabecera_main}>
                        <div className={styles.cabecera_texto}>
                            <h1>Somos <span>BeeDevelopers</span></h1>
                            <p>La comunidad de <span>desarrolladores</span> para <span>desarrolladores</span></p>
                        </div>
                        <Boton link="https://www.beedevelopers.dev/contacto" texto="Conoce más" colorfondo="#FFFFFF" colorfuent="#1685D9"/>
                    </div>
                    <img src="/img/BD_full.png" alt="BeeDevelopers Logo" />
                </div>
                <div className={styles.seccion1}>
                    <img src="/img/code_review.svg" alt="Code review" />
                    <div className={styles.seccion1_texto}>
                        <h2>¿Software Development?, es lo nuestro.</h2>
                        <p><span>Desarrolla tus conocimientos.</span> Se parte de esta gran comunidad donde aprenderás desde el lenguaje más básico de programación hasta el uso de los frameworks más modernos.</p>
                    </div>
                </div>
            </div>
        );
    }
}