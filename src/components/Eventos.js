import React, { Component } from 'react';

import Separador from './Separador';
import Titulo from './Titulo';
import Evento from './Evento';
import EventoRegistro from './EventoRegistro';

import style from './css/eventos.module.css';

export default class Eventos extends Component {
    render() {
        return (
            <div className={style.margin}>
                <Titulo pre_titulo="git init" titulo="Eventos" leyenda="Aquí es donde todo sucede."/>
                {/* <div className={style.seccion} >
                    <div className={style.seccion_texto}>
                        <h2>Aquí es donde todo sucede.</h2>
                        <p>Se parte de los eventos que tenemos preparados para ti. Comparte nuevas experiencias y profundiza en los temas que te gustan. Desde talleres y curso, pasando por conferencias y llegando hasta convivios y viajes. Todo para ti.</p>
                    </div>
                    <img src="/img/computer_gift.svg" alt="Code review" />
                </div> */}


                <Separador titulo="DevWeek" />
                
                <Evento 
                    imagen="/img/devweek.png"
                    img_descr="DevWeek Logo"
                    titulo="Asiste a nuestros talleres y ponencias."
                    texto="La semana de cursos y talleres relacionada a la programación."
                    facebook="https://www.facebook.com/BeeDevelopersUG/"
                    instagram="https://www.instagram.com/beedevelopers/?hl=es-la"
                    twitter="https://twitter.com/BeeDevelopers"
                />

                {/* <Separador titulo="Talleres Internos" /> */}
                
                <EventoRegistro
                    imagen="https://pngimage.net/wp-content/uploads/2018/06/html-css-png-4.png"
                    img_descr="html y css"
                    titulo="HTML y CSS"
                    texto="Realizarás tu primer página web, aprenderás como estructurar una página web y su comportamiento con los navegadores."
                    linkRegistro="https://forms.gle/AP3jNa6A8qodidTaA"
                />
                <EventoRegistro
                    imagen="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                    img_descr="git"
                    titulo="GIT: from zero to hero"
                    texto="Aprende a respaldar tu trabajo mediante el uso de Git y también aprende a hacer proyectos colaborativos con tu equipo con esta herramienta."
                    linkRegistro="https://forms.gle/SL7kGAfXFjpJuweTA"
                />
                <EventoRegistro
                    imagen="https://www.techunlimited.in/assets/themes/default/images/ux-ui-logo.png"
                    img_descr="ui"
                    titulo="Hazlo Bonito"
                    texto="Tu mejor amiga laura te platica de la importancia del diseño en una interfaz de usuario para alcanzar un mayor público y conseguir tus millones."
                    linkRegistro="https://forms.gle/w8rVGbgKh7U7xSVb7"
                />
                <EventoRegistro
                    imagen="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin-logo.svg/1024px-Kotlin-logo.svg.png"
                    img_descr="kotlin"
                    titulo="Crea tu primera app nativa para Android con Kotlin"
                    texto="Aprende los fundamentos del desarrollo de apps usando Android Studio y Kotlin, el nuevo lenguaje oficial de android más rapido, moderno y conciso."
                    linkRegistro="https://forms.gle/5Cs4syCJuzdpR6kB9"
                />
                <EventoRegistro
                    imagen="https://i.pinimg.com/originals/a0/bb/70/a0bb70e17aa4d8d999bd2239add52840.jpg"
                    img_descr="unity"
                    titulo="Como empezar tu primer juego móvil"
                    texto="Orientar a aquellos interesados en desarrollar juegos móviles,herramientas para empezar a crear sus propios juegos, experiencias y consejos. Vistazo rápido a Unity."
                    linkRegistro="https://forms.gle/F8GXZo8i7WpSTHAS9"
                />
                <EventoRegistro
                    imagen="https://static.platzi.com/media/achievements/badge-ethical-hacking-7882aa60-a295-4abd-8891-b60c482700cf.png"
                    img_descr="hacking"
                    titulo="Curso de introducción al Hacking Ético"
                    texto="Aprende técnicas de pentesting y como explotar vulnerabilidades en aplicaciones web o en servidores Linux."
                    linkRegistro="https://forms.gle/WoyvNJKBgxP8erKQ7"
                />
                <EventoRegistro
                    imagen="https://vignette.wikia.nocookie.net/ides/images/c/c1/1200px-Visual_Studio_Code_1.35_icon.svg.png/revision/latest?cb=20190811151827&path-prefix=es"
                    img_descr="visual"
                    titulo="Taller de Visual Studio Code"
                    texto="Aprende a usar visual studio code y aumenta tu velocidad al codificar."
                    linkRegistro="https://forms.gle/bSyzZXj7KpUZwhVS8"
                />
                <EventoRegistro
                    imagen="https://www.stickpng.com/assets/images/584830f5cef1014c0b5e4aa1.png"
                    img_descr="react"
                    titulo="React. Desarrollo Web para todos"
                    texto="Taller donde se enseñará a desarrollar una página web de manera rápida utilizando el framework de Javascript, ReactJS."
                    linkRegistro="https://forms.gle/xy8RPD9Jbpfzpkdb7"
                />
                <EventoRegistro
                    imagen="http://www.gamecoderstudios.com/wp-content/uploads/2018/02/GC_white_1-1024x576.png"
                    img_descr="gamecoder"
                    titulo="VR en el Trabajo"
                    texto="Game Coder nos acompaña para brindarnos una platica sobre el uso de la realidad virtual en un ámbiente laboral."
                    linkRegistro="https://forms.gle/cZp1Dn9c9gW7uuGbA"
                />

            </div>
        );
    }
}