import React, { Component } from 'react';
import Redes from './RedesSociales'
import style from './css/noticia.module.css';



export default class Noticia extends Component {
    render(props) {
        return (
            <div className={style.evento}>
                <img src={this.props.imagen} alt={this.props.img_descr} />
                <div className={style.descr}>
                <p className={style.ubicacion}><i class="fas fa-map-marker-alt"></i>{" " + this.props.ubicacion}</p>
                    <h3>{this.props.titulo}</h3>
                    <p>{this.props.texto}</p>
                    <Redes facebook={this.props.facebook} instagram={this.props.instagram} twitter={this.props.twitter} />
                </div>
            </div>
        );
    }
}