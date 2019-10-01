import React, { Component } from 'react';
import styles from './css/boton.module.css';

export default class Boton extends Component {
    render(props) {

        const style ={
            backgroundColor: this.props.colorfondo,
            color: this.props.colorfuente,
        }

        return (
            <a style={style }href={this.props.link} className={styles.boton}>
                {this.props.texto}
            </a>
        );
    }
}