import React, { Component } from 'react';

import Separador from './Separador';
import Titulo from './Titulo';
import Evento from './Evento';
import EventoRegistro from './EventoRegistro';

import style from './css/eventos.module.css';

export default class Eventos extends Component {
    render() {
        return (
            <div>
                <Titulo pre_titulo="git init" titulo="Eventos" leyenda="Todo para ti."/>
                <div className={style.seccion} >
                    <div className={style.seccion_texto}>
                        <p><span>Desarrolla tus conocimientos.</span> Se parte de esta gran comunidad donde aprenderás desde el lenguaje más básico de programación hasta el uso de los frameworks más modernos.</p>
                    </div>
                    <img src="/img/computer_gift.svg" alt="Code review" />
                </div>


                <Separador titulo="Próximamente" />
                
                <Evento 
                    imagen="/img/hackflayer.png"
                    img_descr="Flayer de Hackathon"
                    titulo="HackDevelopers"
                    texto="Se parte de esta gran comunidad donde aprenderás desde el lenguaje más básico de programación hasta el uso de los frameworks más modernos."
                    facebook="#"
                    instagram="#"
                    twitter="#"
                />

                <Separador titulo="Nuestros Eventos" />
                
                <EventoRegistro
                    imagen="/img/hackflayer.png"
                    img_descr="Flayer de Hackathon"
                    titulo="DevWeek- Curso de React"
                    texto="Se parte de esta gran comunidad donde aprenderás desde el lenguaje más básico de programación hasta el uso de los frameworks más modernos."
                    facebook="#"
                    instagram="#"
                    twitter="#"
                    linkRegistro="#"
                />

            </div>
        );
    }
}