import React, { Component } from 'react';

import styles from './css/titulo.module.css';

export default class Titulo extends Component {
    render(props) {
        return (
            <div className={styles.contenedor}>
                <h2><span className={styles.italic}>{this.props.pre_titulo}</span> <span className={styles.bold}>{this.props.titulo}</span> <span className={styles.italic}>{this.props.post_titulo}</span> </h2>
                <p>{this.props.leyenda}</p>
            </div>
        );
    }
}