/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Component } from "react";
import "../../styles/header/sidebar.css"


class SideMenu extends Component {
    
    constructor(){
        super()
        this.closeNav = this.closeNav.bind(this)
    }

    closeNav(){
        document.getElementById("mySidenav").style.width = "0";
    }

    render(){
        return (
            <div id="mySidenav" className="sidenav">
                <a href="#" className="closebtn" onClick={this.closeNav}>&times;</a>
                <li><a href="#">OFERTAS</a></li>
                <li><a href="#">DESAYUNOS</a></li>
                <li><a href="#">ARREGLOS</a></li>
                <li><a href="#">DE TEMPORADA</a></li>
                <li><a href="#">OCASIÓN</a></li>
                <li><a href="#">PERSONALIZADOS</a></li>
                <li><a href="#">CLIENTES</a></li>
            </div>
        )
    }
}


export default SideMenu