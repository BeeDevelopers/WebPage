import React, { Component } from 'react';

import style from './css/evento.module.css';
import Redes from './RedesSociales';

export default class Evento extends Component {

    render(props) {
        return (
            <div className={style.evento}>
                <img src={this.props.imagen} alt={this.props.img_descr} />
                <div className={style.descr}>
                    <h3>{this.props.titulo}</h3>
                    <p>{this.props.texto}</p>
                    <Redes facebook={this.props.facebook} instagram={this.props.instagram} twitter={this.props.twitter} />
                </div>
            </div>
        );
    }
}