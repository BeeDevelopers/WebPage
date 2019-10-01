import React, { Component } from 'react';

import Titulo from './Titulo';
import Separador from './Separador';

import seccion from './css/eventos.module.css';
import styles from './css/contacto.module.css';

export default class Contacto extends Component {
    render() {
        return (
            <div>
                <Titulo 
                    pre_titulo="<h1>"
                    titulo="Contacto"
                    post_titulo="</h1>"
                    leyenda="Forma Parte."
                />

                <div className={seccion.seccion} >
                    <div className={seccion.seccion_texto}>
                        <p><span>Desarrolla tus conocimientos.</span> Se parte de esta gran comunidad donde aprenderás desde el lenguaje más básico de programación hasta el uso de los frameworks más modernos.</p>
                    </div>
                    <img src="/img/social_media.svg" alt="Social Media" />
                </div>

                <Separador titulo="Información y Redes Sociales" />

                <div className={styles.info}>
                    <img src="/img/map.svg" alt="mapa" />
                    <div className={styles.texto}>
                        <p><span>Dirección:</span> </p>
                        <p>Oficinas de CEMER. Camino a Palo Blanco #227 Salamanca, Guanajuato.</p>
                        <p><span>E-mail:</span></p><a href="mailto:beedevelopers.dicis@gmail.com">beedevelopers.dicis@gmail.com</a>
                        <p><span>Redes Sociales:</span></p>
                        <div className={styles.redes}>
                            <a className={styles.facebook} href="https://www.facebook.com/BeeDevelopersUG/">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a className={styles.instagram}  href="https://www.instagram.com/beedevelopers/?hl=es-la">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a className={styles.twitter}  href="https://www.twitter.com/BeeDevelopers">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}