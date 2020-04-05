import React, { Component } from 'react';
// import { Link, useParams } from 'react-router-dom';

// import Titulo from "./Titulo";
// import styles from './css/titulo.module.css';

export default class Devteam extends Component {
    constructor(props){
        super(props);
        this.state = {
            integrante: {},
            integrantes: {
                alan : {
                    imagenRuta: "",
                    nombre: "Alan Alvarez",
                    contacto: ["linkedin", "github", "mail", "whatsapp"],
                    skills: ["vue", "etc"],
                    proyectos: [{nombre: "proyecto1", imagenRuta: "", descr:"", links: ["github", "pagina"]}]
                },
                diego : {
                    imagenRuta: "",
                    nombre: "Diego",
                    contacto: ["linkedin", "github", "mail", "whatsapp"],
                    skills: ["vue", "angular", "etc"],
                    proyectos: [{nombre: "proyecto1", imagenRuta: "", descr:"", links: ["github", "pagina"]}]
                },
                idalid : {
                    imagenRuta: "",
                    nombre: "Idalid",
                    contacto: ["linkedin", "github", "mail", "whatsapp"],
                    skills: ["vue"],
                    proyectos: [{nombre: "proyecto1", imagenRuta: "", descr:"", links: ["github", "pagina"]}]
                }
            }
        }

    }

    componentWillMount(){
        let nombre = this.props.match.params.nombre
        this.setState({integrante: this.state.integrantes[nombre]})
    }

    render() {
       
        console.log(this.state.integrante)
        
        const skills = []
        for(let value of this.state.integrante.skills){
            skills.push(<li>{value}</li>)
        }
        return (
            <div>
            <h3>{this.state.integrante.nombre}</h3>
            <ul>
                <li>{this.state.integrante.contacto[0]}</li>
                <li>{this.state.integrante.contacto[1]}</li>
                <li>{this.state.integrante.contacto[2]}</li>
                <li>{this.state.integrante.contacto[3]}</li>
            </ul>
            <h2>Skills</h2>
            <ul>
                 {skills} 
            </ul>
                
                

            </div>
        );
    }
}
