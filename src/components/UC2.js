import React from "react";

class HelloMsg extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Hello From Bridgelabz'
        }
    }
    render() {
        return (
            <div className="HelloMsg">
                <h1> {this.state.title} </h1>
            </div>
        );
    }

}
export default HelloMsg;