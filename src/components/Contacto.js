import React, { Component } from 'react';

import Titulo from './Titulo';
import Separador from './Separador';

import seccion from './css/eventos.module.css';
import Redes from './RedesSociales';
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
                    <img src="" alt="mapa" />
                    <div className={styles.texto}>
                        <p><span>Dirección:</span> Oficinas de CEMER. Camino a Palo Blanco #227 Salamanca, Guanajuato.</p>
                        <p><span>E-mail:</span> beedevelopers.dicis@gmail.com</p>
                        <Redes
                            facebook="https://www.facebook.com/BeeDevelopersUG/"
                            instagram="https://www.instagram.com/beedevelopers/?hl=es-la"
                            twitter="https://www.twitter.com/BeeDevelopers"
                        />
                    </div>
                </div>

            </div>
        );
    }
}