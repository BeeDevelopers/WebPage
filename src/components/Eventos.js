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
                        <p><span>Aquí es donde todo sucede.</span> Se parte de los eventos que tenemos preparados para ti. Comparte nuevas experiencias y profundiza en los temas que te gustan. Desde talleres y curso, pasando por conferencias y llegando hasta convivios y viajes. Todo para ti.</p>
                    </div>
                    <img src="/img/computer_gift.svg" alt="Code review" />
                </div>


                <Separador titulo="Próximamente" />
                
                <Evento 
                    imagen="/img/hackflayer.png"
                    img_descr="Flayer de Hackathon"
                    titulo="HackDevelopers"
                    texto="Próximanente en DICIS el hackathon que estabas buscando. Ánimate a participar y vivir esta gran experiencia."
                    facebook="#"
                    instagram="#"
                    twitter="#"
                />

                {/* <Separador titulo="Nuestros Eventos" /> */}
                
                {/* <EventoRegistro
                    imagen="/img/hackflayer.png"
                    img_descr="Flayer de Hackathon"
                    titulo="DevWeek- Curso de React"
                    texto="Se parte de esta gran comunidad donde aprenderás desde el lenguaje más básico de programación hasta el uso de los frameworks más modernos."
                    facebook="#"
                    instagram="#"
                    twitter="#"
                    linkRegistro="#"
                /> */}

            </div>
        );
    }
}