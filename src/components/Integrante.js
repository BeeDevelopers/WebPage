import React, { Component } from 'react';
import {Container, Row, Card, CardDeck, Button} from 'react-bootstrap';
import Persona from './Persona';
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
                    proyectos: [{nombre: "proyecto1", imagenRuta: "/img/grupo2.jpeg", descr:"project description", links: ["github", "pagina"]}, {nombre: "proyecto2", imagenRuta: "/img/grupo2.jpeg", descr:"project description", links: ["github", "pagina"]}]
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
            skills.push(
            // TODO: Hacer que cambie el color del skill
            <Skill title={value} color="blue"></Skill>
            )
        }
        return (
            <Container className="text-center pt-5">
               
                <Persona width="170" nombre="Alan Álvarez" img="/img/alan.jpg"/>
                    <h3>Web Developer</h3>
                    <Row className="justify-content-md-center">
                        <a className="px-2"href={this.state.integrante.contacto[0]} rel="noopener noreferrer" style={{fontSize: "2rem"}} target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                        <a className="px-2"href={this.state.integrante.contacto[1]} rel="noopener noreferrer" style={{fontSize: "2rem"}} target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
                        <a className="px-2"href={this.state.integrante.contacto[2]} rel="noopener noreferrer" style={{fontSize: "2rem"}} target="_blank" title="Mail"><i class="fas fa-envelope"></i></a>
                        <a className="px-2"href={this.state.integrante.contacto[3]} rel="noopener noreferrer" style={{fontSize: "2rem"}} target="_blank" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                    </Row>
                    <h3 className="pt-5">Skills</h3>
                    <Container className="d-flex justify-content-center pb-5">
                        {skills}
                    </Container>
                    <h2>Proyectos</h2>
                    <Row></Row>
                    <Container className="py-5">
                        <CardDeck>
                            {this.state.integrante.proyectos.map((proyecto, index) =>
                                <Card key={index} >
                                    <Card.Header>
                                        <Card.Title>
                                            {proyecto.nombre}
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Img  src={proyecto.imagenRuta}/>
                                    <Card.Body>
                                        <a href={this.state.integrante.contacto[1]} rel="noopener noreferrer" target="_blank" title="GitHub">
                                            <i class="fab fa-github" style={{fontSize: "2rem"}}></i>
                                        </a>
                                        <Card.Text>
                                            {proyecto.descr}
                                        </Card.Text>
                                        <Button variant="primary">Ver demo</Button>
                                        
                                    </Card.Body>
                                </Card>
                            // <li key={index}>{proyecto.nombre}</li>
                            )}
                        </CardDeck>
                    </Container>
                    <h3 className="pt-4">Conoce a todos los integrantes</h3>
                    <Row className="justify-content-md-center py-5">
                        <Persona width="100" nombre="Alan Álvarez" img="/img/alan.jpg"/>
                        <Persona width="100" nombre="Alan Álvarez" img="/img/alan.jpg"/>
                        <Persona width="100" nombre="Alan Álvarez" img="/img/alan.jpg"/>
                        <Persona width="100" nombre="Alan Álvarez" img="/img/alan.jpg"/>
                        <Persona width="100" nombre="Alan Álvarez" img="/img/alan.jpg"/>
                        <Persona width="100" nombre="Alan Álvarez" img="/img/alan.jpg"/>
                    </Row>
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
