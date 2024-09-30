import React from "react";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import foto0 from '../reyes/rey_atanagildo.png'

export default function Pagina1(){
  const reyes = useContext(Contexto);
 
    return(
        <div style={{textAlign:"center"}}>
            <div  >
                <img style={{width:"300px",height:"250px",margin:"10px"}} 
                  src={foto0} />
                </div>
            <h1>{reyes[0].nombre}</h1>
        </div>
    )
}