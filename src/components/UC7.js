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
            <div className="WecomePage">
                <div>
                    <h1> Hello {this.state.userName} from Bridgelabz </h1>
                    <img src={logo} onClick={this.onClick} alt="Bridgelabz logo" />
                    <div className="input">
                        <input placeholder="Enter Your Name" onChange={this.onInputChange} /><br />
                        <span className='error-output'> {this.state.nameError} </span>
                    </div>
                </div>
                <p>At Bridgelabz we are a Community of</p>
                <ul>
                    <li>Technologists</li>
                    <li>Thinkers</li>
                    <li>Builders</li>
                </ul>
                <p>
                    Working together to keep the employability of Engineers alive and accessible,
                    so Tech Companies worldwide can get contributors and creators for technology Solutions.
                    We belive this act of human collaboration across an employability platfor is essential
                    to individual growth and our collevtive future.</p>
                <p>To know more about us, visit <a href="https://www.bridgelabz.com/">Bridgelabz</a>
                    to learn even more about out mission
                    <strong>i.e Employability to all</strong>
                </p>


            </div>
        );
    }

}

export default UC6;