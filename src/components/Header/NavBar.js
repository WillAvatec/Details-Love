/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

class NavBar extends Component {

    render(){
        return (
            <nav>
               <li><a href="#">OFERTAS</a></li>
               <li><a href="#">DESAYUNOS</a></li>
               <li><a href="#">ARREGLOS FLORALES</a></li>
               <li><a href="#">DE TEMPORADA</a></li>
               <li><a href="#">OCASIÓN</a></li>
               <li><a href="#">PERSONALIZADOS</a></li>
            </nav>
        )
    }
}

export default NavBar