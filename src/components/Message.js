import React, { Component } from "react";

class Message extends Component {
    //using state in class component
    constructor() {
        super()
        this.state = {
            message: 'Welcome to state in class component.'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return (
            <div>
                <h3>
                    Using state in class component
                </h3>
                <p>
                    <h2>{this.state.message}</h2>
                    <button onClick={() => this.changeMessage()}>Subscribe</button>
                </p>
            </div>
        )
    }
}

export default Message