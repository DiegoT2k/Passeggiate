import React, { useEffect } from 'react';

import Navbar from "./navbar";
import foto from "../images/foto5.webp";


function Lago(){
    
    return(
        <>
            <Navbar></Navbar>
            <div className='container'>
                <h1 style={{textAlign:"center"}}>Lago d'arpy</h1>
                <img className='img-fluid mx-auto p-2 rounded d-block' src={foto} style={{height:"50vh"}}></img>  
                <p>
                <b>Durata:</b> 1h <br></br>
                <b>Percorso:</b>Est interdum praestare mercaturis rem quaerere, nisi tam periculosum sit, et item foenerari, si tam honestum. Maiores nostri sic habuerunt et ita in legibus posiverunt: furem dupli condemnari, foeneratorem quadrupli. Quanto peiorem civem existimarint foeneratorem quam furem, hinc licet existimare. Et virum bonum quom laudabant, ita laudabant: bonum agricolam bonumque colonum; amplissime laudari existimabatur qui ita laudabatur. Mercatorem autem strenuum studiosumque rei quaerendae existimo, verum, ut supra dixi, periculosum et calamitosum. At ex agricolis et viri fortissimi et milites strenuissimi gignuntur, maximeque pius quaestus stabilissimusque consequitur minimeque invidiosus, minimeque male cogitantes sunt qui in eo studio occupati sunt. Nunc, ut ad rem redeam, quod promisi institutum principium hoc erit.             
                <br></br>
                <b>Acqua:</b> fontanelle durante il percorso <br></br>
                <b>Fauna:</b> scarsità di fauna, magari qualche capriolo <br></br>
                <b>Consigli:</b><br></br>
                </p>
            </div>
        </>
    );
}

export default Lago;