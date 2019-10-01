import React, { Component } from 'react';

import style from './css/redes.module.css';

export default class RedesSociales extends Component {
    render(props) {
        return (
            <div className={style.barra}>
                <a href={this.props.facebook}>
                    <i class="fab fa-facebook"></i>
                </a>
                <a href={this.props.instagram}>
                    <i class="fab fa-instagram"></i>
                </a>
                <a href={this.props.twitter}>
                    <i class="fab fa-twitter"></i>
                </a>
            </div>
        );
    }
}