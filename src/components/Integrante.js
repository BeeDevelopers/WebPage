import React, { Component } from 'react';
import {Container, Row, Column} from 'react-bootstrap';

import Skill from './Skill';
// import { Link, useParams } from 'react-router-dom';

// import Titulo from "./Titulo";
// import styles from './css/integrante.module.css';
// import { Content } from 'react-bootstrap/lib/Tab';


export default class Devteam extends Component {
    constructor(props){
        super(props);
        this.state = {
            integrante: {},
            integrantes: {
                alan : {
                    imagenRuta: "/img/alan.jpg",
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
            <Container fluid>
                <Container></Container>
                <h3>Web Developer</h3>
                <Row></Row>
                <h3>Skills</h3>
                <Skill title="Vue" color="red"/>
                <Skill title="Digital Ocean" color="blue"/>
                <Skill title="React" color="red"/>
                <Skill title="Firebase" color="green"/>
                <Row></Row>
            </Container>
            
            // 
            // <div className={styles.container}>
            // <img className={styles.userImage} alt="user" src={this.state.integrante.imagenRuta}/>
            // <h3>{this.state.integrante.nombre}</h3>
            // <h4>Web Developer</h4>
            // <div className={styles.socialContainer}>
            //     <a href={this.state.integrante.contacto[0]} rel="noopener noreferrer" className={styles.socialIcon} target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
            //     <a href={this.state.integrante.contacto[1]} rel="noopener noreferrer" className={styles.socialIcon} target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
            //     <a href={this.state.integrante.contacto[2]} rel="noopener noreferrer" className={styles.socialIcon} target="_blank" title="Mail"><i class="fas fa-envelope"></i></a>
            //     <a href={this.state.integrante.contacto[3]} rel="noopener noreferrer" className={styles.socialIcon} target="_blank" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
            // </div>
            // <ul>
            //     <li>{this.state.integrante.contacto[0]}</li>
            //     <li>{this.state.integrante.contacto[1]}</li>
            //     <li>{this.state.integrante.contacto[2]}</li>
            //     <li>{this.state.integrante.contacto[3]}</li>
            // </ul>
            // <h2>Skills</h2>
            // <ul>
            //      {skills} 
            // </ul>
            // </div>
        );
    }
}
