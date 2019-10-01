import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from './css/header.module.css';

export default class Header extends Component {

    render() {
        return (
            <div className={styles.header}>
                <Link to="/">
                   <img className={styles.imagen} src="/img/BD_nombre.png" alt="BeeDevelopers;" />
                </Link>
                <div className={styles.links}>
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/nosotros"><p>Nosotros</p></Link>
                    <Link to="/eventos"><p>Eventos</p></Link>
                    <Link to="/noticias"><p>Noticias</p></Link>
                    <Link to="/contacto"><p>Contacto</p></Link>
                </div>
            </div>            
        );
    }
}