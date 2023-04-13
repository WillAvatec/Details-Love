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
                <a href="#">Quienes somos</a>
                <a href="#">Servicios</a>
                <a href="#">Clientes</a>
                <a href="#">Contactos</a>
            </div>
        )
    }
}


export default SideMenu