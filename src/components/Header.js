import React, { Component } from 'react';
import styles from './header.module.css'

export default class Header extends Component {

    render() {
        return (
            <div className={styles.color}>
                <h1>Hola</h1>
            </div>            
        );
    }
}