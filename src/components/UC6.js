import React from "react";
import logo from './assets/logo.jpg'

class UC6 extends React.Component {
    URL = "https://www.bridgelabz.com/";
    constructor() {
        super();
        this.state = {
            userName: '',
            nameError: '',
        }
    }

    onClick = () => {
        console.log("URL opened in new tab");
        window.open(this.URL);
    }

    onInputChange = (event) => {
        const regexForOnlyChar = RegExp("^[A-z\\s]*$");
        const regexForFirstChar = RegExp("^[A-Z]{1}[a-zA-Z\\s]*$");
        const regexForMinChar = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
        // const nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
        if (!(regexForOnlyChar.test(event.target.value))) {
            this.setState({
                nameError: "Only char allowed"
            })
        } else if (!(regexForFirstChar.test(event.target.value))) {
            this.setState({
                nameError: "First char should be upper case"
            })
        } else if (!(regexForMinChar.test(event.target.value))) {
            this.setState({
                nameError: "Min 3 char reqired"
            })
        } else {
            this.setState({
                userName: event.target.value,
                nameError: ''
            })
        }

    }

    render() {
        return (
            <div>
                <h1> Hello {this.state.userName} from Bridgelabz </h1>
                <img src={logo} onClick={this.onClick} alt="Bridgelabz logo" />
                <div>
                    <input placeholder="Enter Your Name" onChange={this.onInputChange} />
                    <span className='error-output'> {this.state.nameError} </span>
                </div>
            </div>
        );
    }

}

export default UC6;