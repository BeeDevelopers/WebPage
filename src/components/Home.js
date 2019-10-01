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
            </div>
        );
    }
}