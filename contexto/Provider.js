import Contexto from './Contexto';
import React from 'react';


const reyes = [{nombre:"Atanagildo"},
    {nombre:"Ataulfo"},
    {nombre:"Ervigio"},
    {nombre:"Leogivildo"},
    {nombre:"Recesvinto"},
    {nombre:"Sisebuto"}]


export default function Provider  ({children}) {

    return(
        <Contexto.Provider value={reyes}>
           {children}
        </Contexto.Provider>
    )
}