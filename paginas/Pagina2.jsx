import React from "react";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import foto1 from '../reyes/rey_ataulfo.png'

export default function Pagina2(){
  const reyes = useContext(Contexto);

    return(
        <div style={{textAlign:"center"}}>
            <div  >
                <img style={{width:"300px",height:"250px",margin:"10px"}} 
                  src={foto1} />
                </div>
            <h1>{reyes[1].nombre}</h1>
        </div>
    )
}