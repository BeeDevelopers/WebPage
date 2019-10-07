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
                        <h2>Aquí es donde todo sucede.</h2>
                        <p>Se parte de los eventos que tenemos preparados para ti. Comparte nuevas experiencias y profundiza en los temas que te gustan. Desde talleres y curso, pasando por conferencias y llegando hasta convivios y viajes. Todo para ti.</p>
                    </div>
                    <img src="/img/computer_gift.svg" alt="Code review" />
                </div>


                <Separador titulo="Próximamente" />
                
                <Evento 
                    imagen="/img/hackflayer.png"
                    img_descr="Flayer de Hackathon"
                    titulo="HackDevelopers"
                    texto="Próximanente en DICIS el hackathon que estabas buscando. Ánimate a participar y vivir esta gran experiencia."
                    facebook="https://www.facebook.com/BeeDevelopersUG/"
                    instagram="https://www.instagram.com/beedevelopers/?hl=es-la"
                    twitter="https://twitter.com/BeeDevelopers"
                />

                <Separador titulo="Talleres Internos" />
                
                <EventoRegistro
                    imagen="http://rbwebsolutions.in/wp-content/uploads/2018/05/c-programming.png"
                    img_descr="C logo"
                    titulo="Programación en C"
                    texto="Fecha: Martes 15 de Octube de 14:00 - 16:00 hrs. C es para muchos el primer lenguaje con el que entran en contacto con el mundo de la programación."
                    linkRegistro="https://forms.gle/CmLa9tmhSL1c6evZ7"
                />
                <EventoRegistro
                    imagen="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png"
                    img_descr="C++ logo"
                    titulo="Programación en C++"
                    texto="Fecha: Miércoles 16 de Octube de 12:00 - 14:00 hrs. C++ es el lenguaje apropiado para comenzar a aprender el paradigma de la programación orientada a objetos."
                    linkRegistro="https://forms.gle/zP8LeK6Y1xkEsCgh6"
                />
                <EventoRegistro
                    imagen="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                    img_descr="React.js logo"
                    titulo="Desarrollo Web con React.js"
                    texto="Fecha: Miércoles 16 de Octube de 14:00 - 16:00 hrs. Aprenderas el uso básico de terminal, editor de textos, uso de AdobeXD para hacer el diseño de tus aplicaciones y React.js."
                    linkRegistro="https://forms.gle/Fd7jD45moVU97epJ7"
                />

            </div>
        );
    }
}