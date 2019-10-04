import React, { Component } from 'react';
import Titulo from './Titulo'
import Noticia from './Noticia'
import Separador from './Separador'
import style from './css/noticias.module.css'

export default class Noticias extends Component {
    state = {  }
    render() {
        return (
            <div className={style.noticias}>
                <Titulo pre_titulo="print(" titulo="Hola Mundo" post_titulo=")" leyenda="Buscando impactar."/>
                <div className={style.contenedor}>
                    <p>
                    <h2>Nuestra Comunidad Activa.</h2>
                    Sé parte de esta gran comunidad donde aprenderás desde el lenguaje más básico de programación hasta el uso de los frameworks más modernos.</p>
                    <img alt="ilustracion" src="/img/undraw_investment.svg"/>
                </div>

                <Separador titulo="Somos Comunidad TalentLand 2020"/>
                <Noticia
                ubicacion="Guadalajara Jalisco, 2020."
                imagen="/img/talentland2020.jpg"
                img_descr="Flayer de Hackathon"
                titulo="Nos vemos en TalentLand 2020"
                texto="Somos parte de las comunidades de talento de la próxima edición de Jalisco Talent Land 2020. Esperamos contar con tu participación en este evento para demostrar que BeeDevelopers está lleno de talentos.
                Recibimos entradas patrocinadas por TalentNetwork (no incluyen camping), que serán otorgadas como premio a los miembros más activos de nuestra comunidad. ¿Quieres ganarte una?, ¡Demuestra que eres un talento!."
                facebook="#"
                instagram="#"
                twitter="#"
                ></Noticia>

                <Separador titulo="LinceHack 2019"/>
                <Noticia
                ubicacion="Instituto Tecnológico de Celaya. Septiembre 2019"
                imagen="https://lh3.googleusercontent.com/XlrucayvsllC4O2xWivmobTsNx9PVnzNsL8384TBApL-Uih0WqBAxVUoFj26I4o8cSaG_V4ggoR4Ij8Ue4AnbqGrRqoWR5899n3KeVTyxv-So8bfesazJbaPrM_G1a_UxWePWBL3C9U=w960-h640-no"
                img_descr="Flayer de Hackathon"
                titulo="Primer Lugar"
                texto="Miembros de BeeDevelopers junto con Apolo UG obtuvieron el primer lugar en el hackathon LinceHack realizada por el Tecnológico de Celaya con la presentación de la plataforma educativa 'Ludoverso'."
                facebook="#"
                instagram="#"
                twitter="#"
                ></Noticia>

                <Separador titulo="Hackathon BBVA"/>
                <Noticia
                ubicacion="Ciudad de México. Septiembre 2019"
                imagen="https://lh3.googleusercontent.com/EKz-ALKrGjJWfhXsXCj3vxGGcKWancHePXzLNJbhUv2v0LDuDpwMSjam0rUeE_eJ1hYpIEJqPE8vRTKxL-g4RQtOsbhTJLigGL9KZYQFtG00Q4ojUbjo-0r6VhWUHh4s2zuStV61=w1149-h862-no"
                img_descr="Flayer de Hackathon"
                titulo="Quinto Lugar"
                texto="Un equipo conformado por miebros de BeeDevelopers concursaron el el Hackathon BBVA 2019 en la Cuidad de México y obtuvieron el quinto lugar."
                facebook="#"
                instagram="#"
                twitter="#"
                ></Noticia>

                <Separador titulo="Festividad Mexicana y prevención del suicidio"/>
                <Noticia
                ubicacion="División de Ingenierías Campus Irapuato Salamanca. Septiembre 2019"
                imagen="https://lh3.googleusercontent.com/Fe-nHdAXtPr4R9irQu15nQXMG6dfdy0z9C63B5vg0hn5N1xtnbpfbHX-0t9lpz4I4uB5mDOTh0bVOxIzM-h0MupwJDW3KFZSeOdIn-VIJokjFO5keDP10yZJeB9uckutY_UsSFNlPw=w1297-h862-no"
                img_descr="Flayer de Hackathon"
                titulo="Festejo del día de la Independencia"
                texto="BeeDevelopers festejó en DICIS el día de la Independencia con frescas rusas y ricos buñuelos."
                facebook="#"
                instagram="#"
                twitter="#"
                ></Noticia>
            </div>
        );
    }
}