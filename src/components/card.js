import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component{
    render(){
        return(
        <>
            <div className="col">
                <div className="card" style={{width: "18rem", textAlign: "center"}}>
                    <img src={this.props.foto} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.nome}</h5>
                        <p className="card-text">Livello: {this.props.difficoltà}</p>
                        <button className="btn btn-danger"><Link className="text-decoration-none text-light" to={`/${this.props.num}`}>Itinerario</Link></button>
                    </div>
                </div>
            </div>
        </>
        );        
    }

}

export default Card;