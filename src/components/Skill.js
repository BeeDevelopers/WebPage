import React, { Component } from 'react';

import styles from './css/skill.module.css';

export default class Skill extends Component {
    state = {  }
    render() {
        return (
            <div className={styles.container} style={{backgroundColor: this.props.color}}>
                <p>{this.props.title}</p>
            </div>
        );
    }
}