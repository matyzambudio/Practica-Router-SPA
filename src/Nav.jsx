import { useContext } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import Contexto from '../contexto/Contexto'


export default function Nav() {
    const reyes = useContext(Contexto);
   
  return (
    <nav style={{display:"flex",margin:"10px",justifyContent:"space-evenly",backgroundColor:"aqua",
        color:"black",fontFamily:"cursive",fontSize:"18px",padding:"25px",
    }}>
      <NavLink className={({isActive}) => isActive ? 'seleccionado' : undefined} to='/'> Home </NavLink>
      
      <NavLink to='/pagina1' className={( {isActive} )=> isActive ? 'seleccionado' : undefined}  >
         {reyes[0].nombre}</NavLink>
      
      <NavLink to='/pagina2' className={({isActive}) => isActive ? 'seleccionado' : undefined}
      > {reyes[1].nombre} </NavLink>
      
      <NavLink to='/pagina3' className={({isActive}) => isActive ? 'seleccionado':undefined}>
       {reyes[2].nombre} </NavLink>
      
      <NavLink to='/pagina4' className={({isActive}) => isActive ? 'seleccionado' : undefined}>
      {reyes[3].nombre} </NavLink>
      
      <NavLink className={({isActive})=> isActive ? 'seleccionado' : undefined} to='/pagina5' >
         {reyes[4].nombre} </NavLink>
      
      <NavLink  className={({isActive})=> isActive ? 'seleccionado' : undefined} to='/pagina6'>
         {reyes[5].nombre} </NavLink>
    </nav>
  );
}
