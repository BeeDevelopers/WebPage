import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Titulo from "./Titulo";
import Persona from './Persona';
// import styles from './css/titulo.module.css';

export default class Devteam extends Component {
    render(props) {

        const integrantes = ["Alan", "Diego", "Idalid", "Miguel", "Hugo", "Apk"]
        const links = []
        for(const value of integrantes){
            links.push(<Link className="text-decoration-none" style={{color: "black"}} key="0" to={"/devteam/"+value.toLowerCase()}> <Persona nombre={value} img="/img/alan.jpg"/> </Link>)
        }

        return (
            <div>
                <Titulo pre_titulo="" titulo="Web Development Team" post_titulo="" leyenda="Del código a la web"/>
                <div className="text-center mb-3">
                <img src="/img/team.png" className="w-50 img-fluid" alt="Responsive image"></img>
                </div>

                <div className="text-center container text-justify text-break">
                        <p><span className="font-weight-bold">Un equipo preparado y profesional.</span> Queremos escucharte. Síguenos en nuestras redes sociales donde tenemos contenido interesante y publicamos información relevante para ti. Enterate de todo lo relacionado a desarrollo de software y de como trabajamos para llegar a ser la mejor comunidad de desarrolladores.</p>
                </div>

                <div className="container text-center my-5">
                    <h2 className="font-weight-bold font-italic">Nuestro Equipo</h2>
                </div>
                <div className="container">

                <div className="row row-cols-1 row-cols-md-3 mb-5">
                    {links}
                </div>
                </div>
            </div>
        );
    }
}