import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from './css/header.module.css';
import {Navbar, Nav} from 'react-bootstrap';


export default class Header extends Component {

    render() {
        return (
            // <div className={styles.header}>
            //     <Link to="/">
            //        <img className={styles.imagen} src="/img/BD_nombre.png" alt="BeeDevelopers;" />
            //     </Link>
            //     <div className={styles.links}>
            //         <Link to="/"><p>Home</p></Link>
            //         <Link to="/nosotros"><p>Nosotros</p></Link>
            //         <Link to="/eventos"><p>Eventos</p></Link>
            //         <Link to="/noticias"><p>Noticias</p></Link>
            //         <Link to="/contacto"><p>Contacto</p></Link>
            //     </div>
            // </div>       

                <Navbar collapseOnSelect expand="lg" className={styles.backgroundbee} >
                    <Navbar.Brand href="/">
                        <img className={styles.imagen} src="/img/BD_nombre.png" alt="BeeDevelopers;" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" bg="light">
                        <Nav className="ml-auto">
                            <Nav.Link className={styles.links} href="/nosotros"><p>Nosotros</p></Nav.Link>
                            <Nav.Link className={styles.links} href="/eventos"><p>Eventos</p></Nav.Link>
                            <Nav.Link className={styles.links} href="/noticias"><p>Noticias</p></Nav.Link>
                            <Nav.Link className={styles.links} href="/contacto"><p>Contacto</p></Nav.Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Navbar>



        );
    }
}

