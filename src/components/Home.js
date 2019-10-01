import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from './css/home.module.css';

import Boton from './Boton';
import Separador from './Separador';

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
                <div className={styles.seccion}>
                    <img src="/img/code_review.svg" alt="Code review" />
                    <div className={styles.seccion_texto}>
                        <h2>¿Software Development?, es lo nuestro.</h2>
                        <p><span>Desarrolla tus conocimientos.</span> Se parte de esta gran comunidad donde aprenderás desde el lenguaje más básico de programación hasta el uso de los frameworks más modernos.</p>
                    </div>
                </div>
                <Separador title="Pensado por y para estudiantes" />
                <div className={styles.seccion}>
                    <div className={styles.seccion_texto}>
                        <p><span>Desarrolla tus conocimientos.</span> Se parte de esta gran comunidad donde aprenderás desde el lenguaje más básico de programación hasta el uso de los frameworks más modernos.</p>
                    </div>
                    <img className={styles.foto} src="/img/BD_grupo.jpeg" alt="Foto Grupal" />
                </div>
                <Separador title="Nuevas tecnologías" />
                <div className={styles.seccion}>
                    <img src="/img/static_assets.svg" alt="Tecnologías" />
                    <div className={styles.seccion_texto}>
                        <p><span>Desarrolla tus conocimientos.</span> Se parte de esta gran comunidad donde aprenderás desde el lenguaje más básico de programación hasta el uso de los frameworks más modernos.</p>
                    </div>
                </div>

                <div className={styles.frase}>
                    <h2>Nuestra comunidad te espera.</h2>
                </div>

                <div className={styles.seccionFinal}>
                    <div className={styles.seccionFinal_imagenes}>
                        <img src="/img/version_control.svg" alt="Tecnologías" />
                        <img className={styles.especial} src="/img/chica_laptop.svg" alt="Tecnologías" />
                        <img src="/img/code_team.svg" alt="Tecnologías" />
                    </div>
                    <Boton  link="#" texto="Contáctanos" colorfondo="#1685D9" colorfuente="#ffffff" />
                </div>

            </div>
        );
    }
}