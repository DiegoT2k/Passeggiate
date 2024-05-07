import React, {Component} from 'react';
import Card from "./card";
import foto1 from "../images/foto1.jpg";
import foto2 from "../images/foto2.jpg";
import foto3 from "../images/foto3.jpg";
import foto4 from "../images/foto4.jpeg"

class Menu extends Component{

    state = {
        cards: [
            {id: 0, foto: foto4, nome: "Lago d'Arpy", difficoltà: "Turistica"}, 
            {id: 1, foto: foto1, nome: "Monte", difficoltà: "Facile"},
            {id: 2, foto: foto2, nome: "Laghi", difficoltà: "Facile"},
            {id: 3, foto: foto3, nome: "Ghiacciaio del Rutor", difficoltà: "Difficile"}
        ]
    }
/**
    handleDelete = cardId => {
        const updatedCards = this.state.cards.filter(card => card.id !== cardId);
        this.setState({cards: updatedCards});
    }
*/
    render(){
        return(
        <>
            <div className="container">
                <h1>Quale gita vuoi fare?</h1>
                <hr/>
                <div className="row">
                    {this.state.cards.map(card => (
                        <Card 
                            key={card.id}
                            num={card.id}
                            nome={card.nome}
                            difficoltà={card.difficoltà}
                            foto={card.foto}
                            //onDelete={this.handleDelete}
                        />
                    ))}
                </div>
            </div>
        </>
        );        
    }
}

export default Menu;