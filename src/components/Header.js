import { Component } from "react";
import "../styles/header.css";
import NavBar from "./Header/NavBar.js"
import LogoContainer from "./Header/Logo";
import Announcement from "./Header/Announcement";

class Header extends Component {

    render(){
        return (
            <div className="header-container">
                <Announcement />
                <LogoContainer />
                <NavBar />
            </div>
        )
    }
}

export default Header