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
                <div className={style.contenedor}>
                    <p>
                    <h3>Nuestra Comunidad Activa.</h3>
                    Sé parte de esta gran comunidad donde aprenderás desde el lenguaje más básico de programación hasta el uso de los frameworks más modernos.</p>
                    <img alt="ilustracion" src="/img/undraw_investment.svg"/>
                </div>

                <Titulo pre_titulo="print(" titulo="Hola Mundo" post_titulo=")" leyenda="Buscando impactar."/>
                <Separador titulo="LinceHack 2019"/>
                <Noticia
                ubicacion="Instituto Tecnológico de Celaya. Septiembre 2019"
                imagen="https://lh3.googleusercontent.com/XlrucayvsllC4O2xWivmobTsNx9PVnzNsL8384TBApL-Uih0WqBAxVUoFj26I4o8cSaG_V4ggoR4Ij8Ue4AnbqGrRqoWR5899n3KeVTyxv-So8bfesazJbaPrM_G1a_UxWePWBL3C9U=w960-h640-no"
                img_descr="Flayer de Hackathon"
                titulo="Primer Lugar"
                texto="Se parte de esta gran comunidad donde aprenderás desde el lenguaje más básico de programación hasta el uso de los frameworks más modernos."
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
                texto="Se parte de esta gran comunidad donde aprenderás desde el lenguaje más básico de programación hasta el uso de los frameworks más modernos."
                facebook="#"
                instagram="#"
                twitter="#"
                ></Noticia>

                <Separador titulo="Festividad Mexicana y prevención del suicidio"/>
                <Noticia
                ubicacion="División de Ingenierías Campus Irapuato Salamanca. Septiembre 2019"
                imagen="https://lh3.googleusercontent.com/Fe-nHdAXtPr4R9irQu15nQXMG6dfdy0z9C63B5vg0hn5N1xtnbpfbHX-0t9lpz4I4uB5mDOTh0bVOxIzM-h0MupwJDW3KFZSeOdIn-VIJokjFO5keDP10yZJeB9uckutY_UsSFNlPw=w1297-h862-no"
                img_descr="Flayer de Hackathon"
                titulo="Quinto Lugar"
                texto="Se parte de esta gran comunidad donde aprenderás desde el lenguaje más básico de programación hasta el uso de los frameworks más modernos."
                facebook="#"
                instagram="#"
                twitter="#"
                ></Noticia>
            </div>
        );
    }
}