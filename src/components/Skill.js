import React, { Component } from 'react';

import styles from './css/skill.module.css';

export default class Skill extends Component {
    constructor(props){
        super(props);
        this.state = {color: 'blue'}
    }

    componentDidMount(){
        // Aquí se ponen los colores de los skills
        switch (this.props.title.toLowerCase()) {
            case "vue":
                this.setState({color: '#13E564'})
                break;
            case "firebase":
                this.setState({color: '#E59C13'})
                break;            
            default:
                this.setState({color: '#1685D9'})
                break;
        }
    }
    render() {
        let skill
        return (
            <div className={styles.container} style={{backgroundColor: this.state.color}}>
                <p>{this.props.title}</p>
            </div>
        );
    }
}