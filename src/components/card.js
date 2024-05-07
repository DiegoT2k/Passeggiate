import React, { Component } from 'react';

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
                        <button className="btn btn-outline-danger">Itinerario</button>
                    </div>
                </div>
            </div>
        </>
        );        
    }

}

export default Card;