import React, { Component } from 'react';


export default class Persona extends Component {
    render(props) {
        return (
            <div className="text-center card border-0 my-2">
                    <img src={this.props.img} alt="..." class="mx-auto img-responsive rounded-circle" width={this.props.width} />
                    <h2 className="font-weight-bold my-2">{this.props.nombre}</h2>
            </div>
        );
    }
}