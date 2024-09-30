import React from "react";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import foto5 from '../reyes/rey_sisebuto.png'

export default function Pagina6(){
  const reyes = useContext(Contexto);

    return(
        <div style={{textAlign:"center"}}>
            <div  >
                <img style={{width:"300px",height:"250px",margin:"10px"}} 
                  src={foto5} />
                </div>
            <h1>{reyes[5].nombre}</h1>
        </div>
    )
}