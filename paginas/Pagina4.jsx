import React from "react";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import foto3 from '../reyes/rey_leogivildo.png'

export default function Pagina4(){
  const reyes = useContext(Contexto);

    return(
        <div style={{textAlign:"center"}}>
            <div  >
                <img style={{width:"300px",height:"250px",margin:"10px"}} 
                  src={foto3} />
                </div>
            <h1>{reyes[3].nombre}</h1>
        </div>
    )
}