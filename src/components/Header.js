import { Component } from "react";

class Header extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="header-container">
                <h1>CV App</h1>
            </div>
        )
    }
}

export default Header