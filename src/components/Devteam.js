import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Titulo from "./Titulo";
// import styles from './css/titulo.module.css';

export default class Devteam extends Component {
    render(props) {

        const integrantes = ["alan", "diego", "idalid"]
        const links = []
        for(const value of integrantes){

            links.push(<Link  key="0" to={"/devteam/"+value}>{value}</Link>)
        }

        return (
            <div>
                <Titulo pre_titulo="" titulo="Web Development Team" post_titulo="" leyenda="Del código a la web"/>
                {links}
                

            </div>
        );
    }
}