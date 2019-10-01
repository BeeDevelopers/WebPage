import React, {Component} from 'react';
import styles from './css/separador.module.css'

export default class Separador extends Component {
    state = {  }
    render() {
        return (
            <div className={styles.separador}>
                <h3>{this.props.title}</h3>
            </div>
        );
    }
}
