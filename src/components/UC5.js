import React from "react";
import logo from './assets/logo.jpg'

class Uc5 extends React.Component {
    URL = "https://www.bridgelabz.com/"
    constructor() {
        super()
        this.state = {
            username: ""
        }
    }
    //onclick function
    onClick = (event) => {
        console.log("URL opened in new tab", event);
        window.open(this.URL)
    }
    onNameChange = (event) => {
        console.log("value is", event.target.value);
        this.setState({ username: event.target.value })
    }
    render() {
        return (
            <div>
                <h1>Hello {this.state.username} From Bridgelabz</h1>
                <img src={logo} onClick={this.onClick} alt="A Bridgelabz logo: a Bridge to Employee through lab work" />

                <div>
                    <input onChange={this.onNameChange} />
                </div>
            </div>
        );
    }
}

export default Uc5;