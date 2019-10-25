import React, { Component } from 'react';
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
                        <Boton link="/nosotros" texto="Conoce más" colorfondo="#FFFFFF" colorfuente="#1685D9"/>
                    </div>
                    <img src="/img/BD_full.png" alt="BeeDevelopers Logo" />
                </div>
                <div className={styles.seccion}>
                    <img src="/img/code_review.svg" alt="Code review" />
                    <div className={styles.seccion_texto}>
                        <h2>¿Software Development?, es lo nuestro.</h2>
                        <p>Al formar parte de <span>BeeDevelopers</span> te integras a una comunidad deseosa de trabajar e impactar en nuestro entorno. Además de que enriqueceras tus conocimientos al aprender nuevas tecnologías y los frameworks más modernos.</p>
                    </div>
                </div>
                <Separador titulo="Pensado por y para estudiantes" />
                <div className={styles.seccion}>
                    <div className={styles.seccion_texto}>
                        <h2>La comunidad estudiantil que esperabas.</h2>
                        <p>Estamos integrados por <span>personas activas</span> y deseosas de ser un modelo a seguir para las nuevas generaciones de desarrolladores y para toda nuestra comunidad universitaria en general. Una de nuestras grandes fortalezas es el <span>sentimiento de compañerismo</span>, gracias a eso hemos formado más que un grupo de amigos, hemos formado una <span>familia</span></p>
                    </div>
                    <img className={styles.foto} src="/img/BD_grupo.jpeg" alt="Foto Grupal" />
                </div>
                <Separador titulo="Nuevas tecnologías" />
                <div className={styles.seccion}>
                    <img src="/img/static_assets.svg" alt="Tecnologías" />
                    <div className={styles.seccion_texto}>
                        <h2>Aprende y desarrolla.</h2>
                        <p><span>Desarrolla tus conocimientos.</span> Nuestro principal objetivo es el flujo de conocimiento. Buscamos ser el lugar donde las personas compartan experiencias, consejos, nuevas herramientas y sobre todo ánimo para continuar mejorando las skills que te definirán como un desarrollador de software.</p>
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
                    <Boton  link="/contacto" texto="Contáctanos" colorfondo="#1685D9" colorfuente="#ffffff" />
                </div>

            </div>
        );
    }
}