import React from "react";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import foto2 from '../reyes/rey_ervigio.png'

export default function Pagina3(){
  const reyes = useContext(Contexto);

    return(
        <div style={{textAlign:"center"}}>
            <div  >
                <img style={{width:"300px",height:"250px",margin:"10px"}} 
                  src={foto2} />
                </div>
            <h1>{reyes[2].nombre}</h1>
        </div>
    )
}