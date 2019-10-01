import React, {Component} from 'react';
import styles from './css/separador.module.css'

export default class Separador extends Component {
    state = {  }
    render() {
        return (
            <div className={styles.separador}>
                <div className={styles.separador_container}>
                    <h3 className={styles.separador_titulo}>{this.props.titulo}</h3>
                </div>
            </div>
        );
    }
}
