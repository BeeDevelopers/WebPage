import React, { Component } from 'react';
import Titulo from './Titulo'
import Noticia from './Noticia'
import Separador from './Separador'

export default class Noticias extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Titulo pre_titulo="print(" titulo="Hola Mundo" post_titulo=")" leyenda="Buscando impactar."/>
                <Separador titulo="LinceHack 2019"/>
                <Noticia
                imagen="/img/hackflayer.png"
                img_descr="Flayer de Hackathon"
                titulo="HackDevelopers"
                texto="Se parte de esta gran comunidad donde aprenderás desde el lenguaje más básico de programación hasta el uso de los frameworks más modernos."
                facebook="#"
                instagram="#"
                twitter="#"
                ></Noticia>
            </div>
        );
    }
}