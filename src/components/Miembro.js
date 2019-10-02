import React, { Component } from 'react';

import style from './css/miembro.module.css';

export default class Miembro extends Component {
    render(){
        return(
            <div className={style.miembro}>
                <img alt="miembro" src={this.props.img}></img>
                <h3 className={style.nombre}>{this.props.nombre}</h3>
                <h3 className={style.cargo}>{this.props.cargo}</h3>
                <p>{this.props.descripcion}</p>
            </div>
        );
    }
}