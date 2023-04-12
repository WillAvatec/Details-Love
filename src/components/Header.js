import { Component } from "react";
import "../styles/header.css";
import logo from "../styles/assets/logo-no-background.png"

class Header extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="wrapper">
                <div className="header-container">
                    <div className="aviso">
                        <p>¡Comunicate con nosotros! +51 991586055</p>
                    </div>
                    <header className="main-header">
                        <img alt="Details-Love-Logo" id="logo" src={logo}/>
                        <button id="hamburguer-button">
                            <div></div>
                            <div></div>
                            <div></div>
                        </button>
                    </header>
                    <div className="nav-wrapper">
                        <nav>
                            <a href="#">OFERTAS</a>
                            <a href="#">DESAYUNOS SORPRESA</a>
                            <a href="#">ARREGLOS</a>
                            <a href="#">FORMAL</a>
                            <a href="#">OCASIÓN</a>
                            <a href="#">REGALOS</a>
                        </nav>
                    </div>
                    </div>
            </div>
        )
    }
}

export default Header