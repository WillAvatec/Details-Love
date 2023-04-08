import { Component } from "react";

class Footer extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="footer-container">
                <p>Develop by <a href="https://www.theodinproject.com/lessons/node-path-javascript-cv-application">avatec2312</a></p>
            </div>
        )
    }
}

export default Footer