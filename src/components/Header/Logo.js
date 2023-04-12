import { Component } from "react";
import logo from "../../styles/assets/logo-no-background.png"
import "../../styles/header/logo.css"

class LogoContainer extends Component {

    render(){
        return (
            <header className="logo-header">
                <a id="logo-link" href="#">
                    <img alt="Details-Love-Logo" id="logo" src={logo}/>
                </a>
                <button id="hamburguer-button">
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </header>
        )
    }
}

export default LogoContainer