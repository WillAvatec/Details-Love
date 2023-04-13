/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import logo from "../../styles/assets/logo-no-background.png"
import "../../styles/header/logo.css"
import SideMenu from "./SideMenu.js"

class LogoContainer extends Component {

    constructor(){
        super()
        this.openNav = this.openNav.bind(this)
    }

    openNav(){
        document.getElementById("mySidenav").style.width = "250px";
    }

    render(){
        return (
            <header className="logo-header">
                <a id="logo-link" href="#">
                    <img alt="Details-Love-Logo" id="logo" src={logo}/>
                </a>
                <button onClick={this.openNav} id="hamburguer-button">
                    <div></div><div></div><div></div>
                </button>
                <SideMenu />
            </header>
        )
    }
}

export default LogoContainer