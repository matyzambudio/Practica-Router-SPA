import React from "react";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import foto4 from '../reyes/rey_recesvinto.png'

export default function Pagina5(){
  const reyes = useContext(Contexto);

    return(
        <div style={{textAlign:"center"}}>
            <div  >
                <img style={{width:"300px",height:"250px",margin:"10px"}} 
                  src={foto4} />
                </div>
            <h1>{reyes[4].nombre}</h1>
        </div>
    )
}